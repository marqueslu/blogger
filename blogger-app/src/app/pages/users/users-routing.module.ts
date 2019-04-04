import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';


const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: "signin", component: AuthUserComponent },
  { path: "signup", component: RegisterUserComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
