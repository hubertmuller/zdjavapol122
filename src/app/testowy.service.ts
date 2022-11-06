import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestowyService {

  constructor() { }

  public powitanie (tekst: string): string {
    return 'Witaj ' + tekst + '! Dawno sie nie widzielismy';
  }
}
