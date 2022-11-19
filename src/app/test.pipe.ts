import { Pipe, PipeTransform } from '@angular/core';
import { Osoba, OsobyService } from './osoby.service';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  constructor (private osoby: OsobyService) {

  }
  transform(value: string|null, przedrostek: string): string {
    
    return `${przedrostek}${value}`;
  }

}
