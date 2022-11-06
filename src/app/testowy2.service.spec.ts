import { TestBed } from '@angular/core/testing';

import { Testowy2Service } from './testowy2.service';

describe('Testowy2Service', () => {
  let service: Testowy2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Testowy2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
