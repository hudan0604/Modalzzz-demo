import { NgModule } from '@angular/core';
import { WraperComponent } from './components/wraper/wraper.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './confirmModal.component';

@NgModule({
  declarations: [WraperComponent, ModalContentComponent, ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
})
export class ModalzzzModule {}
