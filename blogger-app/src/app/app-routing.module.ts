import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "articles" },
  {
    path: "articles",
    loadChildren: "./articles/articles.module#ArticlesModule"
  },
  { path: "users", loadChildren: "./users/users.module#UsersModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
