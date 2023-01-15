import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  users: User[] = [];
  userSubject = new Subject<User[]>();

  constructor() { }
  ngOnInit(): void {

  }

  emitUsers(): void {
    this.userSubject.next(this.users);
  }
  addUser(user: User): void {
    this.users.push(user);
    this.emitUsers();
  }
}
