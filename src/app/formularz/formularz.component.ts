import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Osoba, OsobyService } from '../osoby.service';
import { ZdrowieService } from '../zdrowie.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  public bmi: number = 0;

  public forma = new FormGroup( {
    imie: new FormControl("Jan", {validators: [
      Validators.pattern('[a-zA-Z ]*'), 
      Validators.minLength(2),
      Validators.required
    ], updateOn: "change"}),
    nazwisko: new FormControl("Kowalski", {validators: [], updateOn: "change"}),
    waga: new FormControl(null, {validators: [Validators.min(1), Validators.required], updateOn: "change"}),
    wzrost: new FormControl(null, {validators: [Validators.min(1), Validators.required], updateOn: "change"}),
    aktywnosc: new FormControl(null, {validators: [], updateOn: "change"}),
    plec: new FormControl(null, {validators: [], updateOn: "change"}),
    uzywki: new FormGroup(
      {
        alkohol: new FormControl(false, {validators: [], updateOn: "change"}),
        kawa: new FormControl(false, {validators: [], updateOn: "change"}),
      }
    )

  } )
  public wysylaniewToku = false;
  public udanyZapis= false;

  constructor(private zdrowie: ZdrowieService,
              private osoby: OsobyService) { }

  ngOnInit(): void {

    console.log('Formularz onInit');

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

  ngOnDestroy(): void {
    console.log('Formularz onDestroy');
  }

  zmienNazwisko(nazwisko: string): void {
    this.forma.controls.nazwisko.setValue(nazwisko);
  }

  wyslijFormularz() {
    const wartosciFormy = this.forma.controls;
    const osoba: Osoba = {
      imie: wartosciFormy.imie.value,
      nazwisko: wartosciFormy.nazwisko.value,
      plec: wartosciFormy.plec.value,
      waga: wartosciFormy.waga.value,
      wzrost: wartosciFormy.wzrost.value,
      aktywnosc: wartosciFormy.aktywnosc.value,
      uzywki: {
        kawa: wartosciFormy.uzywki.controls.kawa.value,
        alkohol: wartosciFormy.uzywki.controls.alkohol.value
      }
    };
    this.wysylaniewToku = true;
    this.osoby.wyslijOsobe(osoba).subscribe( (_v) => {
      this.wysylaniewToku = false;
      this.udanyZapis = true;
      this.zerujForme();
      console.log('wyslano');
    });
  }

  zerujForme() {
    this.forma.setValue({
        imie: null,
        nazwisko: null,
        waga: null,
        wzrost: null,
        aktywnosc: null,
        plec: null,
        uzywki: {
            alkohol: false,
            kawa: false,
        }
    });
  }

}
