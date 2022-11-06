import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TestowyService } from '../testowy.service';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Stopka2Component implements OnInit, OnDestroy {

  @Input('imie')
  public tekst = "";

  constructor(public service: TestowyService) { 
    console.log('stopka konstruktor');
  }

  ngOnInit(): void {
    console.log('stopka oninit');
  }

  ngOnDestroy(): void {
    console.log('stopka ondestroy');
  }

  powitanie(): string {
    return this.service.powitanie(this.tekst);
  }

}
