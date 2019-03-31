import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './articles-list/article';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly API = `${environment.API}/articles`;
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Article[]>(this.API);
  }

  loadById(id){
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  crate(article){
    return this.http.post(this.API, article).pipe(take(1));
  }

  delete(id){
    console.log('chegue');
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
