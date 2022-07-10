import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataListComponent } from './shared/data-list/data-list.component';
import { FilterableDataListComponent } from './shared/filterable-data-list/filterable-data-list.component';
import { UserListComponent } from './users-page/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    DataListComponent,
    FilterableDataListComponent,
    UserListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
