import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from './article';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.less']
})
export class ArticlesListComponent implements OnInit {
  
  articles: Article[];
  articles$: Observable<Article[]>
  error$ = new Subject<boolean>();
  bsModalRef : BsModalRef;
  constructor(private service: ArticlesService, private bsModalService: BsModalService) { }

  ngOnInit() {
    // this.service.list().subscribe(articles => this.articles = articles);
    this.articles$ = this.service.list().pipe(
      catchError(error => {
        console.log(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }
  handleError(){
    this.bsModalRef = this.bsModalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Failed to load articles.';
  }

}
