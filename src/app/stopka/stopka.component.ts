import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { TestowyService } from '../testowy.service';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  //providers: [TestowyService]
})
export class Stopka2Component implements OnInit, OnDestroy {

  @Input('imie')
  public tekst = "";

  constructor(private service: TestowyService) { 
  }

  /*constructor() {
    // bez depency injection
    this.service = new TestowyService();
  }*/

  ngOnInit(): void {
    console.log('stopka oninit');
  }

  ngOnDestroy(): void {
    console.log('stopka ondestroy');
  }

  powitanie(): string {
    return this.service.powitanie(this.tekst);
  }

  id(): number {
    return this.service.id();
  }

}
