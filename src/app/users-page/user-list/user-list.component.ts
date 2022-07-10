import { Component, OnInit } from '@angular/core';
import { FilterableDataListComponent } from '../../shared/filterable-data-list/filterable-data-list.component';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent
  extends FilterableDataListComponent<User>
  implements OnInit
{
  constructor() {
    super();
  }

  ngOnInit(): void {
    // todo: add a Widget component
    // filters the data based on searchTermInput value & our callback function
    this.filter(
      // callback which is provided the item & searchTerm values
      (users, searchTerm) => this.filterUser(users, searchTerm)
    );
  }

  // returns filtered User[] based on specified conditions
  filterUser(users: User[], searchTerm: string): User[] {
    return users.filter(
      (user) =>
        user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
