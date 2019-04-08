import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";
import { Observable, empty } from "rxjs";
import { User } from "src/app/models/user";
import { catchError, switchMap, take } from "rxjs/operators";
import { AlertModalService } from "../../shared/alert-modal.service";
import { BsModalRef } from "ngx-bootstrap/modal";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.less"]
})
export class UsersListComponent implements OnInit {
  users$: Observable<User[]>;
  selectedUser: User;
  deleteModalRef: BsModalRef;
  currentUser: string;
  constructor(
    private service: UsersService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.users$ = this.service.list().pipe(
      catchError(error => {
        console.log(error);
        // this.handleError(error);
        return empty();
      })
    );
  }

  onEdit(id) {
    this.router.navigate(["edit", id], { relativeTo: this.route });
  }

  onDelete(user) {
    this.selectedUser = user;

    // this.deleteModalRef = this.modalService.show(this.deleteModal, {
    //   class: "modal-sm"
    // });

    const result$ = this.alertService.showConfirm(
      "Confirm",
      "Are you sure that you want to delete this item?"
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap(result =>
          result ? this.service.remove(this.selectedUser.id) : empty()
        )
      )
      .subscribe(
        success => {
          this.onRefresh();
          this.deleteModalRef.hide();
        },
        error => {
          this.alertService.showAlertDanger(
            "Error during the remove the user. Try again later"
          );
          this.deleteModalRef.hide();
        }
      );
  }

  onConfirmDelete() {
    this.service.remove(this.selectedUser.id).subscribe(
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
