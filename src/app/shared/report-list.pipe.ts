import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reportList'
})
export class ReportListPipe implements PipeTransform {

  transform(value: Array<string>, ...args: any[]): any {
    return value.length;
  }

}
