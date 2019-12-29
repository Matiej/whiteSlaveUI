import { SearchService } from './../../service/search.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  readonly colorTheme: string = 'theme-dark-blue';
  readonly dateFormat: string = 'YYYY-MM-DD';
  bsConfig: Partial<BsDatepickerConfig>;

  nipSelected: boolean;
  regonSelected: boolean;
  bankAccountSelected: boolean;
  isSearchValueInputDisable: boolean = true;
  searchValueInputMaxLength: number = 33;
  searchValueInputMinLength: number = 0;
  inputSearchValuePlacholder: string = 'Wpisz wartość';
  inputSearchValue: string = '';

  isDateValueInputDisable: boolean = true;
  inputDateValue: Date = new Date();
  dateCheckboxSelected: boolean;

  inputInvoice: string = 'Wpisz numer dokumentu';

  constructor(private searchService: SearchService) {
    this.bsConfigParams();
  }

  ngOnInit() {
  }

  clickRadio(event: any) {
    this.isSearchValueInputDisable = false;
    this.inputSearchValue = '';
    switch (event.target.id) {
      case 'opt1': {
        this.inputSearchValuePlacholder = "Wpisz numer NIP";
        this.searchValueInputMaxLength = 10;
        this.searchValueInputMinLength = 10;
        break;
      }
      case 'opt2': {
        this.inputSearchValuePlacholder = "Wpisz numer REGON";
        this.searchValueInputMaxLength = 14;
        this.searchValueInputMinLength = 9;
        break;
      }
      case 'opt3': {
        this.inputSearchValuePlacholder = "Wpisz numer konta bankowego";
        this.searchValueInputMaxLength = 32;
        this.searchValueInputMinLength = 32;
        break;
      }
      default: {
        this.inputSearchValuePlacholder = "Wpisz wartość";
        this.searchValueInputMaxLength = 32;
        this.searchValueInputMinLength = 32;
      }
    }
  }

  inputSearchValueField(event) {
    this.inputSearchValue = event.target.value;
  }

  onFocusInputSearchFiled() {
    this.inputSearchValue ='';
    this.inputSearchValuePlacholder ='';
  }

  onFocusInputInvoice() {
    this.inputInvoice = '';
  }

  enableDateInput() {
    this.isDateValueInputDisable = !this.isDateValueInputDisable;
    if (this.isDateValueInputDisable) {
      this.inputDateValue = new Date();
    }
  }

  enableSearchButton(): boolean {
    return this.inputSearchValue.length == 0;
  }

  public searchByBankAccoutAndDate() {
    this.searchService.searchByBankAccountAndDate(this.inputSearchValue, this.inputDateValue, this.inputInvoice);
    this.clearAfterSearchButton();
  }

  private bsConfigParams() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },
      { dateInputFormat: this.dateFormat },
      { maxDate: new Date() });
  }

  private clearAfterSearchButton() {
    this.nipSelected = false;
    this.regonSelected = false;
    this.bankAccountSelected = false;
    this.inputSearchValue = 'Wpisz wartość';
    this.isSearchValueInputDisable = true;

    this.dateCheckboxSelected = false;
    this.isDateValueInputDisable = true;
    this.inputDateValue = new Date();

    this.inputInvoice = 'Wpisz numer dokumentu';

    this.isDateValueInputDisable = true;
  }

}
