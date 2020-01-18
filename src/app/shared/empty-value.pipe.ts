import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValue'
})
export class EmptyValuePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value != null ? value : '------';
  }

}
