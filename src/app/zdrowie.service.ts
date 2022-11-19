import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZdrowieService {

  constructor() { }

  bmi(wagaKg: number, wzrostCm: number): number {
    console.log(`do metody bmi wprowadzono wagaKg=${wagaKg}, wzrostCm=${wzrostCm}`);
    const bmi = wagaKg/((wzrostCm / 100)**2);
    return bmi;
  }
}
