import { Injectable } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AlertModalComponent } from "./alert-modal/alert-modal.component";
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";

enum AlertTypes {
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success"
}

@Injectable({
  providedIn: "root"
})
export class AlertModalService {
  constructor(private bsModalService: BsModalService) {}

  private showAlert(message: string, type: string, dismissTimeOut?: number) {
    const bsModalRef: BsModalRef = this.bsModalService.show(
      AlertModalComponent
    );
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;

    if (dismissTimeOut) {
      setTimeout(() => bsModalRef.hide(), dismissTimeOut);
    }
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, 3000);
  }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(
      ConfirmModalComponent
    );
    bsModalRef.content.title = title;
    bsModalRef.content.message = msg;

    if (okTxt) {
      bsModalRef.content.okButton = okTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelButton = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }
}
