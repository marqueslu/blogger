import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Observable, empty } from 'rxjs';
import { User } from 'src/app/models/user';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.less']
})
export class UsersListComponent implements OnInit {

  users$: Observable<User[]>;
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.users$ = this.service.list().pipe(
      catchError(error => {
        console.log(error);
        // this.handleError(error);
        return empty();
      })
    )
  }

}
