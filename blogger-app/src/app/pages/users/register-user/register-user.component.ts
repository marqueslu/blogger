import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UsersService } from "src/app/services/users.service";
import { AlertModalService } from "../../shared/alert-modal.service";
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const article = this.route.snapshot.data["user"];
    this.form = this.fb.group({
      id: [article.id],
      firstName: [
        article.firstName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      lastName: [
        article.lastName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(40)]
      ],
      email: [article.email, [Validators.required, Validators.email]]
    });
  }

  onRegister() {
    this.submitted = true;
    if (this.form.valid) {
      let messageSuccess = "Created with success!";
      let errorMessage = "Error during the criation the user, try again!";
      if (this.form.value.id) {
        messageSuccess = "Updated with success!";
        errorMessage = "Error during the update the user, try again!";
      }

      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(messageSuccess);
          this.location.back();
        },
        error =>
          this.modal.showAlertDanger(
            errorMessage
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
