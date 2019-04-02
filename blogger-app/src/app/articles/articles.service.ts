import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Article } from "./article";
import { environment } from "src/environments/environment";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ArticlesService {
  private readonly API = `${environment.API}/articles`;
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Article[]>(this.API);
  }

  loadById(id) {
    return this.http.get<Article>(`${this.API}/${id}`).pipe(take(1));
  }

  private crate(article: Article) {
    return this.http.post(this.API, article).pipe(take(1));
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  private update(article: Article) {
    return this.http.put(`${this.API}/${article.id}`, article).pipe(take(1));
  }

  save(article: Article) {
    if (article.id) {
      return this.update(article);
    } else {
      article.createdAt = new Date();
      return this.crate(article);
    }
  }
}
