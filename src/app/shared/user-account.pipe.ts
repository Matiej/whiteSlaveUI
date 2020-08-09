import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userAccount'
})
export class UserAccountPipe implements PipeTransform {

  transform(value: boolean, ...args: any[]): string {
    return value ? 'NIE' : 'TAK';
  }

}
