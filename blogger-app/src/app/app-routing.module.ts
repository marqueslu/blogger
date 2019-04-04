import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthUserComponent } from './pages/users/auth-user/auth-user.component';
import { RegisterUserComponent } from './pages/users/register-user/register-user.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "articles" },
  {
    path: "articles",
    loadChildren: "./pages/articles/articles.module#ArticlesModule"
  },
  { path: "users", loadChildren: "./pages/users/users.module#UsersModule" }
  // { path: "signin", component: AuthUserComponent },
  // { path: "signup", component: RegisterUserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
