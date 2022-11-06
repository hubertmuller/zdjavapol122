import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestowyService {

  private identyfikator = 0;

  constructor() { 
    this.identyfikator = Math.floor(Math.random()*1000);
    console.log('konstruktor serwisu id=' + this.identyfikator);
  }

  public powitanie (tekst: string): string {
    return 'Witaj ' + tekst + '! Dawno sie nie widzielismy';
  }

  public id(): number {
    return this.identyfikator;
  }
}
