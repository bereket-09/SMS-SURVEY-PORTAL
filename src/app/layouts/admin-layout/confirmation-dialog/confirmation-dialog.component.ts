import { Component, EventEmitter } from '@angular/core';
// import { BsModalRef } from 'ngx-bootstrap/modal';

export interface ConfirmationDialogData {
  message: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  template: `
   
  `,
})
export class ConfirmationDialogComponent {
  // result: EventEmitter<boolean> = new EventEmitter<boolean>();
  // data: ConfirmationDialogData;

  // constructor(public bsModalRef: BsModalRef) {}

  // onCancel() {
  //   this.result.emit(false);
  //   this.bsModalRef.hide();
  // }

  // onConfirm() {
  //   this.result.emit(true);
  //   this.bsModalRef.hide();
  // }
}
