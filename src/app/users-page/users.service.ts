import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../shared/user.model';

// mock db
const USERS: User[] = [
  { firstName: 'Josh', lastName: 'Collins' },
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Tee', lastName: 'Craps' },
  { firstName: 'Trix', lastName: 'Rodgers' },
];

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  // mocks http res
  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
