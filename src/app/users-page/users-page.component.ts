import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent {
  users$: Observable<User[]>;

  constructor(private userService: UsersService) {
    this.users$ = userService.getUsers();
  }
}
