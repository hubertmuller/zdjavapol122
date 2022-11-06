import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZdrowieService {

  constructor() { }

  bmi(wagaKg: number, wzrostCm: number): number {
    return wagaKg/((wzrostCm / 100)**2);
  }
}
