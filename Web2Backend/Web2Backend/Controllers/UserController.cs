using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Web2Backend.Data;
using Web2Backend.Models;
using Web2Backend.Models.FormModels;
using Web2Backend.Models.UserModels;

namespace Web2Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ProjectContext _context;

        public UserController(ProjectContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpPost]
        [Route("AddUser")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<UserModel>> AddUser()
        {

            UserModel user1 = new UserModel() { Username = "admin3", Password = "admin3", Address = "Bulevar Cara Lazara 90", 
                                                BirthDate = new DateTime(1994, 7, 11), ImageData = new byte[5], NameAndLastname = "Njegoslav Radomirovic" };

            _context.Users.Add(user1);

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", user1);

        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody]LoginModel loginForm)
        {
            if(loginForm == null)
            {
                return BadRequest("Invalid client request");
            }

            foreach(UserModel user in _context.Users)
            {
                if(user.Username == loginForm.UserName && user.Password == loginForm.Password)
                {
                    var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKeysdfsdfsdf"));
                    var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                    var claims = new List<Claim>
                    {
                        new Claim(ClaimTypes.Role, getRole(user))
                    };

                    var tokenOptions = new JwtSecurityToken(
                        issuer: "https://localhost:5001",
                        audience: "https://localhost:5001",
                        claims: new List<Claim>(),
                        expires: DateTime.Now.AddMinutes(60),
                        signingCredentials: signingCredentials
                        );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                    CurrentUserModel loggedInUser = new CurrentUserModel
                    {
                        Token = tokenString,
                        Username = user.Username,
                        NameAndLastname = user.NameAndLastname
                    };

                    return Ok(loggedInUser);
                }
            }

            return Unauthorized();
        }
        [HttpPost]
        [Route("Register")]
        public IActionResult Register([FromBody] UserModel userForm)
        {
            if (userForm == null)
            {
                return BadRequest("Invalid client request");
            }
            UserModel user = userForm;
            //_context.Users.Add(user);
            
          
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKeysdfsdfsdf"));
            var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, getRole(user))
            };

            var tokenOptions = new JwtSecurityToken(
                issuer: "https://localhost:5001",
                audience: "https://localhost:5001",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: signingCredentials
                );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            CurrentUserModel loggedInUser = new CurrentUserModel
            {
                Token = tokenString,
                Username = user.Username,
                NameAndLastname = user.NameAndLastname
            };

            return Ok(loggedInUser);
          
            return Unauthorized();
        }
        [HttpGet("username")]
        [Route("CurrentUser")]
        public async Task<ActionResult<IEnumerable<UserModel>>> GetCurrentUser(string username)
        {

            foreach(UserModel user in _context.Users)
            {
                if(user.Username == username)
                {
                    return Ok(user);
                }
            }

            return BadRequest("Wrong username");
        }

        private string getRole(UserModel user)
        {

            //Treba napraviti property u useru da se zna kog je tipa i na osnovu toga vratiti string tipa
            if (user.Username == "admin")
            {
                return "Admin";
            }
            else
            {
                return "User";
            }
        }

    }
}
