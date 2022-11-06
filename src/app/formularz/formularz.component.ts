import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ZdrowieService } from '../zdrowie.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit {

  public bmi: number = 0;

  public forma = new FormGroup( {
    imie: new FormControl("Jan", {validators: [
      Validators.pattern('[a-zA-Z ]*'), 
      Validators.minLength(10),
      Validators.required
    ], updateOn: "change"}),
    nazwisko: new FormControl("Kowalski", {validators: [], updateOn: "change"}),
    waga: new FormControl(null, {validators: [Validators.min(1), Validators.required], updateOn: "change"}),
    wzrost: new FormControl(null, {validators: [Validators.min(1), Validators.required], updateOn: "change"}),
    aktywnosc: new FormControl(null, {validators: [], updateOn: "change"}),
    plec: new FormControl(null, {validators: [], updateOn: "change"}),
    uzywki: new FormGroup(
      {
        alkohol: new FormControl(null, {validators: [], updateOn: "change"}),
        kawa: new FormControl(null, {validators: [], updateOn: "change"}),
      }
    )

  } )

  constructor(private zdrowie: ZdrowieService) { }

  ngOnInit(): void {
    this.forma.controls.imie.valueChanges.subscribe( (value) => {
      if (value === 'Hubert') {
        this.forma.controls.nazwisko.setValue('Muller');
      } else if (value === 'Anna') {
        this.forma.controls.nazwisko.setValue('Kossak');
      }
    })
    this.forma.valueChanges.subscribe( (formularz) => {
      const waga = this.forma.controls.waga.value;
      const wzrost = this.forma.controls.wzrost.value;
      if (!this.forma.controls.waga.errors && !this.forma.controls.wzrost.errors) {
        this.bmi = this.zdrowie.bmi(waga?waga:0, wzrost?wzrost:0);
      } else {
        this.bmi = 0;
      }
    })

  }

  zmienNazwisko(nazwisko: string): void {
    this.forma.controls.nazwisko.setValue(nazwisko);
  }

}
