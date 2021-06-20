import { AfterViewInit, Component, ViewChild,ChangeDetectorRef  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { WorkRequestsDataSource, WorkRequestsItem } from './work-requests-datasource';
import { Router } from '@angular/router';


@Component({
  selector: 'app-work-requests',
  templateUrl: './work-requests.component.html',
  styleUrls: ['./work-requests.component.css']
})
export class WorkRequestsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<WorkRequestsItem>;
  dataSource: WorkRequestsDataSource;
  OriginDataSource: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','startdate','phonenumber','status','address'];
  type!: string;
  checked = false;
  searchKey! : string;
  user! :string;
  constructor(private router:Router) {
    this.dataSource = new WorkRequestsDataSource();
  
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.OriginDataSource = this.dataSource.data;
    this.user =<string>localStorage.getItem("username");
  }

  openDialog(){
    this.router.navigate(['/work-requests/new/basic-info']);
  }
  checkBoxClick(eve: any){
    if(!this.checked)
    {
      //to do podesiti za moje naloge
      this.dataSource.data=this.dataSource.data.filter(item => item.name.toLowerCase().indexOf(this.user)>-1);
      this.paginator._changePageSize(this.paginator.pageSize); 
    }
    else{
      this.dataSource.data=this.OriginDataSource;
      this.paginator._changePageSize(this.paginator.pageSize); 

    }
  }
}
