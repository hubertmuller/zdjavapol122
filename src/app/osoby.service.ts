import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  constructor(private http: HttpClient) { }

  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>("https://6378b5457eb4705cf2729099.mockapi.io/lista")
  }
}

export interface Osoba {
    id?: string,
    imie: string,
    nazwisko: string,
    waga: number,
    wzrost: number,
    aktywnosc: string,
    plec: "k" | "m",
    uzywki: {
      kawa: boolean,
      alkohol: boolean
    }
}
