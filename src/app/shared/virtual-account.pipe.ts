import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'virtualAccount'
})
export class VirtualAccountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    return value===true? 'TAK': 'NIE';
  }

}
