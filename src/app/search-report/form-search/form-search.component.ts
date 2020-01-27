import { SearchReport } from 'src/app/model/searchreport';
import { SearchService } from './../../service/search.service';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {

  private readonly colorTheme: string = 'theme-dark-blue';
  private readonly dateFormat: string = 'YYYY-MM-DD';
  private readonly NIP = 'opt1';
  private readonly REGON = 'opt2';
  private readonly BANKACCOUNT = 'opt3';
  bsConfig: Partial<BsDatepickerConfig>;

  isSearchValueInputDisable: boolean = true;
  searchValueInputMaxLength: number = 33;
  searchValueInputMinLength: number = 0;
  inputSearchValuePlacholder: string = 'Wpisz wartość';
  inputValueOption: string = '';
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
    this.clearSearchFields();
    this.isSearchValueInputDisable = false;
    this.inputSearchValue = '';
    this.inputValueOption = event.target.id;
    switch (event.target.id) {
      case this.NIP: {
        this.inputSearchValuePlacholder = "Wpisz numer NIP";
        this.searchValueInputMaxLength = 10;
        this.searchValueInputMinLength = 10;
        break;
      }
      case this.REGON: {
        this.inputSearchValuePlacholder = "Wpisz numer REGON";
        this.searchValueInputMaxLength = 14;
        this.searchValueInputMinLength = 9;
        break;
      }
      case this.BANKACCOUNT: {
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
    this.clearResult();
  }

  inputSearchValueField(event) {
    this.inputSearchValue = event.target.value;
  }

  onFocusInputSearchFiled() {
    this.inputSearchValue = '';
    this.inputSearchValuePlacholder = '';
  }

  onFocusInputInvoice() {
    this.inputInvoice = '';
  }

  enableDateInput() {
    this.clearResult();
    this.isDateValueInputDisable = !this.isDateValueInputDisable;
    if (this.isDateValueInputDisable) {
      this.inputDateValue = new Date();
    }
  }

  enableSearchButton(): boolean {
    return this.inputSearchValue.length == 0;
  }

  public search() {
    switch (this.inputValueOption) {
      case this.NIP: {
        this.serachByNipAndDate();
        break;
      }
      case this.REGON: {
        this.searchByRegonAndDate()
        break;
      }
      case this.BANKACCOUNT: {
        this.searchByBankAccoutAndDate()
        break;
      }
      default: {
        console.log('ERRORR!!');
      }
    }
  }

  public clearResult() {
    this.searchService.clearSearchReport();
  }

//todo wywalić metodę showAndSearchReport() bezpośrednio ładować do listy. Głupi kurwa pomysł. 
  private serachByNipAndDate() {
    this.searchService.seachByNipAndDate(this.inputSearchValue, this.inputDateValue, this.inputInvoice).subscribe(searchReportResult => {
      this.showAndSendSearchReport(searchReportResult);
    });
  }

  private searchByRegonAndDate() {
    this.searchService.searchByRegonAndDate(this.inputSearchValue, this.inputDateValue, this.inputInvoice).subscribe(searchReportResult => {
      this.showAndSendSearchReport(searchReportResult);
    });

  }

  private searchByBankAccoutAndDate() {
    this.searchService.searchByBankAccountAndDate(this.inputSearchValue, this.inputDateValue, this.inputInvoice).subscribe(searchReportResult => {
      this.showAndSendSearchReport(searchReportResult);
    });

  }

  private showAndSendSearchReport(searchReport: SearchReport): void {
    this.searchService.showAndSendSearchReport(searchReport);

  }

  private bsConfigParams() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },
      { dateInputFormat: this.dateFormat },
      { maxDate: new Date() });
  }

  private clearSearchFields() {

    this.inputSearchValue = 'Wpisz wartość';
    this.isSearchValueInputDisable = true;

    this.dateCheckboxSelected = false;
    this.isDateValueInputDisable = true;
    this.inputDateValue = new Date();

    this.inputInvoice = 'Wpisz numer dokumentu';

    this.isDateValueInputDisable = true;
  }


}
