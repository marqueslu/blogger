import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ArticlesService } from "../articles.service";
import { AlertModalService } from "src/app/shared/alert-modal.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-articles-form",
  templateUrl: "./articles-form.component.html",
  styleUrls: ["./articles-form.component.less"]
})
export class ArticlesFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  
  constructor(
    private fb: FormBuilder,
    private service: ArticlesService,
    private modal: AlertModalService,
    private location: Location,    
  ) {    
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200)
        ]
      ],
      content: [null, [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.service.crate(this.form.value).subscribe(
        sucess => {
          this.modal.showAlertSuccess("Created with success!");
          this.location.back();          
        },
        error =>
          this.modal.showAlertDanger(
            "Error during the criation the article, try again!"
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
