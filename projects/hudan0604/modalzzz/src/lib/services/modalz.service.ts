import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface ModalConfig {
  body?: string | undefined;
  open?: boolean;
  title?: string | null;
  type: ModalType;
  customStyles?: CustomModalOptions;
}

export type ModalType = 'confirm' | 'warning' | 'custom' | null;

export interface CustomModalOptions {
  title?: {
    background?: string;
    color?: string;
  };
  body?: {
    background?: string;
    color?: string;
  };
  buttons?: {
    cancelBtn?: Button;
    submitBtn?: Button;
  };
}

export interface Button {
  title?: string;
  background?: string;
  color?: string;
}

export interface ModalStatus {
  isModalValidated?: boolean;
  isModalClosed?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalzService {
  config$ = new Subject<ModalConfig>();
  config = this.config$.asObservable();
  modalStatus$ = new Subject<ModalStatus>();
  modalStatus = this.modalStatus$.asObservable();
  open(config: ModalConfig): Observable<ModalStatus> {
    config.open = true;
    this.config$.next(config);
    return this.modalStatus;
  }
  close({ config }: { config: ModalConfig }) {
    config.open = false;
    this.config$.next(config);
    this.modalStatus$.next({ isModalClosed: true });
  }

  validateModal() {
    this.modalStatus$.next({ isModalValidated: true });
  }
}
