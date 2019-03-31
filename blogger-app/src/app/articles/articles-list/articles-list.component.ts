import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from './article';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.less']
})
export class ArticlesListComponent implements OnInit {
  
  articles: Article[];
  articles$: Observable<Article[]>
  error$ = new Subject<boolean>();

  constructor(private service: ArticlesService, private alertService: AlertModalService) { }

  ngOnInit() {    
    this.articles$ = this.service.list().pipe(
      catchError(error => {
        console.log(error);        
        this.handleError();
        return empty();
      })
    );
  }

  handleError(){
    this.alertService.showAlertDanger('Failed to load the articles.');
  }

}
