import { Component } from '@angular/core';
import { ModalConfig } from '@hudan0604/modalzzz';
import { ModalzService } from 'projects/hudan0604/modalzzz/src/lib/services/modalz.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo';
  modalStatusSubscription: Subscription | undefined;

  constructor(private modalzService: ModalzService) {}

  openModal(config: ModalConfig) {
    this.modalStatusSubscription = this.modalzService
      .open({
        type: config.type,
        title: config.title,
        body: config.body,
        customStyles: config.customStyles,
      })
      .subscribe(({ isModalValidated, isModalClosed }) => {
        if (isModalValidated) {
          const isOk = confirm(
            'modal has been validated, you can now do whatever you want, for example call back end with form data, if server sends http 200 response, close the modal, if not keep the modal opened'
          );
          if (isOk) {
            this.modalzService.close({ config });
          }
        }
        if (isModalClosed) {
          this.modalStatusSubscription?.unsubscribe();
        }
      });
  }
}
