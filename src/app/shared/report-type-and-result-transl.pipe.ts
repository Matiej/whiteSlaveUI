import { Pipe, PipeTransform, ElementRef, Renderer2, OnInit } from '@angular/core';

@Pipe({
  name: 'reportTypeAndResultTransl'
})
export class ReportTypeAndResultTranslPipe implements PipeTransform {

  readonly CHECK: string = 'CHECK';
  readonly SZYBKA_WERYFIKACJA: string = 'SZYBKA WERYFIKACJA';
  readonly SEARCH: string = 'SEARCH';
  readonly PELNE_WYSZUKIWANIE = 'PEŁNE WYSZUKIWANIE';
  readonly NEGATIVE: string = 'NEGATIVE';
  readonly NEGATYWNY: string = 'NEGATYWNY';
  readonly POSITIVE: string = 'POSITIVE';
  readonly POZYTYWNY: string = 'POZYTYWNY';

  transform(value: string, ...args: any[]): string {
    let result: string = '';
    switch (value) {
      case this.CHECK: {
        result = this.SZYBKA_WERYFIKACJA;
        break;
      };
      case this.SEARCH: {
        result = this.PELNE_WYSZUKIWANIE;
        break;
      };
      case this.NEGATIVE: {
        result = this.NEGATYWNY;
  
        break;
      };
      case this.POSITIVE: {
        result = this.POZYTYWNY;
      
        break;
      };
      default: {
        result = 'NIEZNANY';
      }
    }
    return result;
  }

}
