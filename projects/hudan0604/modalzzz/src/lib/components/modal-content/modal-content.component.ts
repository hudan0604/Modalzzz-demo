import { Component, Input } from '@angular/core';
import { ModalConfig, ModalzService } from '../../services/modalz.service';

@Component({
  selector: 'lib-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  constructor(private modalzService: ModalzService) {}
  @Input() config: ModalConfig | undefined;
  closeModal() {
    this.modalzService.close({
      config: this.config!,
    });
  }
  validateModal() {
    this.modalzService.validateModal();
  }
  handleBody(): string {
    switch (this.config?.type) {
      case 'warning':
        return 'Attention, êtes-vous sûr de confirmer cette action ?';
      case 'confirm':
        return 'Confirmez-vous cette action ?';
      case 'custom':
        return this.config?.body!;
      default:
        return 'default body';
    }
  }
}
