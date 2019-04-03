import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  private readonly API = `${environment.API}/users`;
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User[]>(this.API);
  }
}
