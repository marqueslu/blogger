import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsersListComponent, AuthUserComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
