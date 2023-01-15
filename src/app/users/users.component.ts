import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  usersSubscription: Subscription;
  constructor(private userService: UsersService) { }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.usersSubscription = this.userService.userSubject.subscribe(
      (userRecup: User[]) => {
        this.users = userRecup;
      }
    );
    this.userService.emitUsers();

  }
}
