import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manager-detail',
  templateUrl: './manager-detail.component.html',
  styleUrls: ['./manager-detail.component.css']
})
export class ManagerDetailComponent implements OnInit {

  user$: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private users: UserService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.users.getUser(id).subscribe(res => {
      this.user$ = res.data.facility_manager;
    });
  }

}
