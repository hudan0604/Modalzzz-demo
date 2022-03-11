import { TestBed } from '@angular/core/testing';

import { ModalzService } from './modalz.service';

describe('ModalzService', () => {
  let service: ModalzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
