import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "src/app/services/users.service";
import { AlertModalService } from "../../shared/alert-modal.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrls: ["./register-user.component.less"]
})
export class RegisterUserComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: UsersService,
    private modal: AlertModalService,
    private location: Location
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      lastName: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onRegister() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess("User created with success!");
          this.location.back();
        },
        error =>
          this.modal.showAlertDanger(
            "Failed to create the user. Try again later!"
          )
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }
}
