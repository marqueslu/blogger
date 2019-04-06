import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private readonly API = `${environment.API}/users`;
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User[]>(this.API);
  }

  save(user: User) {
    if (user.id) {
      return this.update(user);
    } else {
      return this.create(user);
    }
  }

  create(user) {
    return this.http.post(this.API, user).pipe(take(1));
  }

  update(user) {
    console.log(user);
    return this.http.put(`${this.API}/${user.id}`, user).pipe(take(1));
  }

  remove(userId){    
    return this.http.delete(`${this.API}/${userId}`).pipe(take(1));
  }

  loadById(id) {
    return this.http.get<User>(`${this.API}/${id}`).pipe(take(1));
  }


  authenticate(email){
    return this.http.get<User>(`${this.API}/?email=${email}`).pipe(take(1));
  }
}
