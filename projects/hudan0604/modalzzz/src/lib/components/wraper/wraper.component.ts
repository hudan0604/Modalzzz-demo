import { Component, OnInit } from '@angular/core';
import { ModalConfig, ModalzService } from '../../services/modalz.service';

@Component({
  selector: 'lib-wraper',
  templateUrl: './wraper.component.html',
  styleUrls: ['./wraper.component.scss'],
})
export class WraperComponent implements OnInit {
  constructor(private modalzService: ModalzService) {}

  config: ModalConfig | undefined;
  closeModal() {
    this.modalzService.close({ config: this.config! });
  }

  ngOnInit(): void {
    this.modalzService.config.subscribe((config) => {
      this.config = config;
    });
  }
}
