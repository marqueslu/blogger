import { Component, OnInit, ViewChild } from "@angular/core";
import { ArticlesService } from "../articles.service";
import { Article } from "../../models/article";
import { Observable, empty, Subject } from "rxjs";
import { catchError } from "rxjs/operators";
import { AlertModalService } from "src/app/shared/alert-modal.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

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

  onEdit(id) {
    this.router.navigate(["edit", id], { relativeTo: this.route });
  }

  onDelete(article) {
    this.selectedArticle = article;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: "modal-sm"
    });
  }

  onConfirmDelete() {
    this.service.remove(this.selectedArticle.id).subscribe(
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

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
