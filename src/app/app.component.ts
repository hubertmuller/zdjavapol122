import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public tytul = 'apka komponent';
  public podtytul = 'pierwszy komponent';
  private data = new Date();
  constructor() {
    console.log('Zostal utworzony komponent');
  }
  public rok(): number {
    return this.data.getFullYear();
  }
}
