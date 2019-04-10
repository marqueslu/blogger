import { Component, OnInit, ViewChild } from "@angular/core";
import { ArticlesService } from "../../../services/articles.service";

import { Observable, empty, Subject } from "rxjs";
import { catchError, take, switchMap, map } from "rxjs/operators";

import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Article } from "src/app/models/article";
import { AlertModalService } from "../../shared/alert-modal.service";

@Component({
  selector: "app-articles-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.less"]
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];
  deleteModalRef: BsModalRef;

  @ViewChild("deleteModal") deleteModal;

  articles$: Observable<Article[]>;
  error$ = new Subject<boolean>();

  selectedArticle: Article;

  constructor(
    private service: ArticlesService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.articles$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty();
      })
    );    
  }

  handleError() {
    this.alertService.showAlertDanger("Failed to load the articles.");
  }

  onEdit(article) {
    this.router.navigate(["edit", article._id], { relativeTo: this.route });
  }

  onDelete(article) {
    this.selectedArticle = article;

    const result$ = this.alertService.showConfirm(
      "Confirm",
      "Are you sure that you want to delete this item?"
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap(result =>
          result ? this.service.remove(this.selectedArticle._id) : empty()
        )
      )
      .subscribe(
        success => {
          this.onRefresh();
          this.deleteModalRef.hide();
        },
        error => {
          this.alertService.showAlertDanger(
            "Error during the remove the course. Try again later"
          );
          this.deleteModalRef.hide();
        }
      );
  }

  onConfirmDelete() {
    this.service.remove(this.selectedArticle._id).subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger(
          "Error during the remove the article. Try again later"
        );
        this.deleteModalRef.hide();
      }
    );
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
