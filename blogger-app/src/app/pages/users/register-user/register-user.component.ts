import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.less"]
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      lastName: [
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      email: [[Validators.required, Validators.email]]
    });
  }

  onRegister() {}

  onCancel() {}
}
