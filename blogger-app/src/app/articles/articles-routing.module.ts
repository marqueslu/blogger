import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';

const routes: Routes = [
  { path: '', component: ArticlesListComponent },
  { path: 'new', component: ArticlesFormComponent },
  { path: 'edit/:id', component: ArticlesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
