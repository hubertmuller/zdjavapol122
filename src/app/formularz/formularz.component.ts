import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {

  public forma = new FormGroup( {
    imie: new FormControl("Jan", {validators: [
      Validators.pattern('[a-zA-Z ]*'), 
      Validators.minLength(10),
      Validators.required
    ], updateOn: "change"}),
    nazwisko: new FormControl("Kowalski", {validators: [], updateOn: "change"})
  } )

  constructor() { }

  ngOnInit(): void {
    this.forma.controls.imie.valueChanges.subscribe( (value) => {
      if (value === 'Hubert') {
        this.forma.controls.nazwisko.setValue('Muller');
      } else if (value === 'Anna') {
        this.forma.controls.nazwisko.setValue('Kossak');
      }
    })
  }

  zmienNazwisko(nazwisko: string): void {
    this.forma.controls.nazwisko.setValue(nazwisko);
  }

}
