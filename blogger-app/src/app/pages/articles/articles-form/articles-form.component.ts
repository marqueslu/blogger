import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ArticlesService } from "../../../services/articles.service";

import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { AlertModalService } from "../../shared/alert-modal.service";

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
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const article = this.route.snapshot.data["article"];
    this.form = this.fb.group({
      id: [article.id],
      title: [
        article.title,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(200)
        ]
      ],
      content: [
        article.content,
        [Validators.required, Validators.minLength(20)]
      ],
      createdAt: [article.createdAt]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      let messageSuccess = "Created with success!";
      let errorMessage = "Error during the criation the article, try again!";

      if (this.form.value.id) {
        messageSuccess = "Updated with success!";
        errorMessage = "Error during the update the article, try again!";
      }
      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(messageSuccess);
          this.location.back();
        },
        error => {
          this.modal.showAlertDanger(errorMessage);
        }
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
