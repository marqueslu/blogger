import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesFormComponent } from './articles-form/articles-form.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ArticlesListComponent, ArticlesFormComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticlesModule { }
