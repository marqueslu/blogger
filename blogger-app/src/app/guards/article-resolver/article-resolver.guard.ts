import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable, of } from "rxjs";

import { ArticlesService } from "../../services/articles.service";
import { Article } from '../../models/article';


@Injectable({
  providedIn: "root"
})
export class ArticleResolverGuard implements Resolve<Article> {
  constructor(private service: ArticlesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article> {    
    if (route.params && route.params["id"]) {
      return this.service.loadById(route.params["id"]);
    }

    return of({
      _id: null,
      title: null,
      content: null,
      createdAt: null
    });
  }
}
