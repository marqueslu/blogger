import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-auth-user",
  templateUrl: "./auth-user.component.html",
  styleUrls: ["./auth-user.component.less"]
})
export class AuthUserComponent implements OnInit {
  form: FormGroup;
  currentUser: string;
  constructor(private fb: FormBuilder, private service: UsersService) {}

  ngOnInit() {}

  authenticate(email) {
    this.service.authenticate(email).subscribe(user => {
      this.currentUser = user[0].email;
      localStorage.setItem("currentUser", this.currentUser);
    });
  }
}
