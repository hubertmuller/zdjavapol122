import { TestBed } from '@angular/core/testing';

import { ZdrowieService } from './zdrowie.service';

describe('ZdrowieService', () => {
  let service: ZdrowieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZdrowieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('powinien obliczyc bmi 1', () => {
    const wynik = service.bmi(80, 185);
    expect(wynik).toEqual(23.37472607742878);
  })

  it('powinien obliczyc bmi 2', () => {
    const wynik = service.bmi(90, 185);
    expect(wynik).toEqual(26.296566837107374);
  })
  
});
