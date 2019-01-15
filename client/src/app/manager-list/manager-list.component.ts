import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  displayedColumns = ['user_id', 'name', 'surname'];
  dataSourceUser;
  user$: User[];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private users: UserService) { }

  ngOnInit() {
    this.users.getUsers().subscribe(res => {
      this.user$ = res.data.facilities_managers;
      this.dataSourceUser = new MatTableDataSource<User>(this.user$);
      this.dataSourceUser.paginator = this.paginator;
    });
  }

}
