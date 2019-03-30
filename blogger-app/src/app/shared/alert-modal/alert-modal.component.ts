import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.less']
})
export class AlertModalComponent implements OnInit {
  
  @Input() message: string;
  @Input() type = 'warning';
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  
  onClose(){
    this.bsModalRef.hide();
  }
}
