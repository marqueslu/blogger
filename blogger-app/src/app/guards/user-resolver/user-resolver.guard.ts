import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { Observable, of } from "rxjs";

import { User } from "src/app/models/user";
import { UsersService } from "src/app/services/users.service";

@Injectable({
  providedIn: "root"
})
export class UserResolverGuard implements Resolve<User> {
  constructor(private service: UsersService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    if (route.params && route.params["id"]) {
      return this.service.loadById(route.params["id"]);
    }

    return of({
      id: null,
      firstName: null,
      lastName: null,
      email: null
    });
  }
}
