import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  constructor(private http: HttpClient) { }

  wyslijOsobe(osoba: Osoba) {
    return this.http.post<any>(environment.apiURL, osoba);
  }

  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>(environment.apiURL);
  }
}

export interface Osoba {
    id?: string | null,
    imie: string | null,
    nazwisko: string | null,
    waga: number | null,
    wzrost: number | null,
    aktywnosc: string | null,
    plec: "k" | "m" | null,
    uzywki: {
      kawa: boolean | null,
      alkohol: boolean | null
    }
}
