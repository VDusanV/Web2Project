using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
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
                                                BirthDate = new DateTime(1994, 7, 11), ImageData = "", NameAndLastname = "Njegoslav Radomirovic" };

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
                        new Claim(ClaimTypes.Role, getRole(user)),
                        new Claim(ClaimTypes.Name, user.Username)
                    };

                    var tokenOptions = new JwtSecurityToken(
                        issuer: "https://localhost:5001",
                        audience: "https://localhost:5001",
                        claims: claims,
                        expires: DateTime.Now.AddMinutes(60),
                        signingCredentials: signingCredentials
                        );

                    var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

                    CurrentUserModel loggedInUser = new CurrentUserModel
                    {
                        Token = tokenString,
                        Username = user.Username,
                        NameAndLastname = user.NameAndLastname,
                        Type = user.UserType
                       
                    };

                    return Ok(loggedInUser);
                }
            }

            return Unauthorized();
        }
        [HttpPost]
        [Route("Register")]
        public async Task<ActionResult<ElementModel>> Register([FromBody] UserModel userForm)
        {
            if (userForm == null)
            {
                return BadRequest("Invalid client request");
            }
            UserModel user = userForm;
            _context.Users.Add(user);
            
            await _context.SaveChangesAsync();

            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKeysdfsdfsdf"));
            var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Role, getRole(user))
            };

            var tokenOptions = new JwtSecurityToken(
                issuer: "https://localhost:5001",
                audience: "https://localhost:5001",
                claims: claims,
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


        [HttpPost, DisableRequestSizeLimit]
        [Route("Upload")]
        public IActionResult Upload()
        {
            try
            {
                var file = Request.Form.Files[0];
                var folderName = Path.Combine("Resources", "Images");
                var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
                if (file.Length > 0)
                {
                    var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    var fullPath = Path.Combine(pathToSave, fileName);

                    var dbPath = Path.Combine(folderName, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                    return Ok(new { dbPath });
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex}");
            }
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
        [HttpPut]
        [Route("Verification")]
        public async Task<ActionResult<UserModel>> Verification(string username)
        {
            UserModel u1 = new UserModel();
            foreach (UserModel user in _context.Users)
            {
                if (user.Username == username)
                {
                    u1 = user;
                    break;

                }
            }
            u1.ActiveStatus = true;
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetUsers", u1);

        }

        [HttpPut]
        [Route("ChangePassword")]
        public async Task<ActionResult<UserModel>> ChangePassword([FromBody] LoginModel passwordForm)
        {
            string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;

            UserModel u1 = new UserModel();
            foreach (UserModel user in _context.Users)
            {
                if (user.Username == username)
                {
                    u1 = user;
                    break;

                }
            }
            u1.Password = passwordForm.Password;
            await _context.SaveChangesAsync();
            return CreatedAtAction("ChangePassword", u1);

        }

        [HttpPut]
        [Route("ChangeProfile")]
        public async Task<ActionResult<UserModel>> ChangeProfile([FromBody] UserModel userF)
        {
            string username = HttpContext.User.FindFirst(ClaimTypes.Name).Value;


            UserModel u1 = new UserModel();
            foreach (UserModel user in _context.Users)
            {
                if (user.Username == username)
                {
                    u1 = user;
                    break;

                }
            }

            if(u1.UserType == null)
            {
                u1.UserType = "Worker";
            }

            if (u1.UserType.Equals(userF.UserType))
            {
                u1.Username = userF.Username;
                u1.NameAndLastname = userF.NameAndLastname;
                u1.Email = userF.Email;
                u1.Address = userF.Address;
                if (userF.ImageData != null)
                {
                    u1.ImageData = userF.ImageData;
                }

                await _context.SaveChangesAsync();
                return CreatedAtAction("ChangeProfile", u1);
            }
            else
            {
                u1.Username = userF.Username;
                u1.NameAndLastname = userF.NameAndLastname;
                u1.Email = userF.Email;
                u1.Address = userF.Address;
                UserRequestModel newRequest = new UserRequestModel
                {
                    Username = userF.Username,
                    NameAndLastname = userF.NameAndLastname,
                    Email = userF.Email,
                    Address = userF.Address,
                    BirthDate = userF.BirthDate,
                    UserType = userF.UserType
                };

                _context.UserRequests.Add(newRequest);

                await _context.SaveChangesAsync();
                return CreatedAtAction("ChangeProfile", u1);
            }

        }

        [HttpGet]
        [Route("UserRequests")]
        public async Task<ActionResult<IEnumerable<UserRequestModel>>> GetUnverifiedUsers()
        {


            return await _context.UserRequests.ToListAsync();
        }

        [HttpPut]
        [Route("UserRequest")]
        public async Task<ActionResult<UserModel>> UserRequest(string username)
        {
            UserModel u1 = new UserModel();
            foreach (UserModel user in _context.Users)
            {
                if (user.Username == username)
                {
                    u1 = user;
                    break;

                }
            }

            UserRequestModel ur1 = new UserRequestModel();
            foreach(UserRequestModel ur in _context.UserRequests)
            {
                if(ur.Username == username)
                {
                    ur1 = ur;
                    break;
                }
            }

            u1.UserType = ur1.UserType;
            _context.UserRequests.Remove(ur1);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetUsers", u1);

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
