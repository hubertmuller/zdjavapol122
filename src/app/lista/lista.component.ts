import { Component, OnDestroy, OnInit } from '@angular/core';
import { Osoba, OsobyService } from '../osoby.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit, OnDestroy {

  public listaOsob: Osoba[] = [];

  constructor(private osoby: OsobyService) { }

  ngOnInit(): void {
    this.osoby.pobierzOsoby().subscribe( (v) => {
      console.log(v);
      this.listaOsob = v;
    }
    );
    console.log('Lista onLoad');
  }

  ngOnDestroy(): void {
    console.log('Lista onDestroy');
  }
}
