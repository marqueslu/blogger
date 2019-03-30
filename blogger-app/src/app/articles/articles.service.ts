import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './articles-list/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly API = `${environment.API}/articles`;
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Article[]>(this.API);
  }
}
