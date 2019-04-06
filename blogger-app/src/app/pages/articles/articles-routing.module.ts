import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ArticlesListComponent } from "./articles-list/articles-list.component";
import { ArticlesFormComponent } from "./articles-form/articles-form.component";
import { ArticleResolverGuard } from '../../guards/article-resolver/article-resolver.guard';


const routes: Routes = [
  { path: "", component: ArticlesListComponent },
  {
    path: "new",
    component: ArticlesFormComponent,
    resolve: { article: ArticleResolverGuard }
  },
  {
    path: "edit/:id",
    component: ArticlesFormComponent,
    resolve: { article: ArticleResolverGuard }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
