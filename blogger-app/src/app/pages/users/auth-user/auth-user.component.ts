import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "src/app/services/users.service";
import { AuthService } from "src/app/services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-auth-user",
  templateUrl: "./auth-user.component.html",
  styleUrls: ["./auth-user.component.less"]
})
export class AuthUserComponent implements OnInit {
  form: FormGroup;
  returnUrl: string;
  submitted = false;
  loading = false;

  currentUser: string;
  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.service.currentUserValue) this.router.navigate(["/"]);
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // authenticate(email) {
  //   this.service.authenticate(email).subscribe(user => {
  //     this.currentUser = user[0].email;
  //     localStorage.setItem("currentUser", this.currentUser);
  //   });
  // }
}
