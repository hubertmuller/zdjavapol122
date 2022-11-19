import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {

  constructor(private http: HttpClient) { }

  pobierzOsoby(): Observable<any> {
    return this.http.get<any>("https://6378b5457eb4705cf2729099.mockapi.io/lista")
  }
}
