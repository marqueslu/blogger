import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from './article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.less']
})
export class ArticlesListComponent implements OnInit {
  
  articles: Article[];

  constructor(private service: ArticlesService) { }

  ngOnInit() {
    this.service.list().subscribe(articles => this.articles = articles);
  }

}
