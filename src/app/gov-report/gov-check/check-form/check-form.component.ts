import { CheckService } from './../../../service/check.service';
import { RequestParamDto } from './../../../model/requestParamDto';
import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent implements OnInit {


  private readonly colorTheme: string = 'theme-dark-blue';
  private readonly dateFormat: string = 'YYYY-MM-DD';
  private readonly NIP = 'c-opt1';
  private readonly REGON = 'c-opt2';

  bsConfig: Partial<BsDatepickerConfig>;


  checkFormParams: RequestParamDto = new RequestParamDto();

  inputValueOption: string = '';
  inputCheckValue: string = '';
  isCheckValueInputDisable: boolean = true;
  inputCheckValuePlaceholder: string = 'Wpisz wartość';
  checkValueInputMaxLength: number = 33;
  checkValueInputMinLength: number = 0;

  inputBankValuePlaceholder: string = 'Wpisz numer konta';
  bankInputLength: number = 32;

  // inputDateValue: Date = new Date();
  dateCheckboxSelected: boolean;

  inputInvoiceValuePlaceholder: string = 'Wpisz numer dokumentu'

  constructor(private checkService: CheckService) {
    this.bsConfigParams();
    this.checkFormParams.date = new Date();
    this.checkFormParams.bankaAccount = '';
  }

  ngOnInit() {
  }

  clickRadio(event: any) {
    this.clearSearchFields();
    this.isCheckValueInputDisable = false;
    this.inputCheckValue = '';
    this.inputValueOption = event.target.id;
    switch (event.target.id) {
      case this.NIP: {
        this.inputCheckValuePlaceholder = "Wpisz numer NIP";
        this.checkValueInputMaxLength = 10;
        this.checkValueInputMinLength = 10;
        break;
      }
      case this.REGON: {
        this.inputCheckValuePlaceholder = "Wpisz numer REGON";
        this.checkValueInputMaxLength = 14;
        this.checkValueInputMinLength = 9;
        break;
      }
      default: {
        this.inputCheckValuePlaceholder = "Wpisz wartość";
        this.checkValueInputMaxLength = 32;
        this.checkValueInputMinLength = 32;
      }
    }
    this.clearResult();
  }

  onFocusInputCheckFiled() {
    this.inputCheckValue = '';
    this.inputCheckValuePlaceholder = '';
  }

  onFocusInputBankField() {
    this.checkFormParams.bankaAccount = '';
    this.inputBankValuePlaceholder = '';
  }

  onFocusInputInvoice() {
    this.checkFormParams.invoice = '';
    this.inputInvoiceValuePlaceholder = '';
  }

  enableSearchButton(): boolean {
    let isButtonDisable: boolean = false;
    if (this.inputCheckValue == null || this.checkFormParams.bankaAccount == null) {
      isButtonDisable = true;
    }
    else if (this.inputCheckValue.length == 0 || this.checkFormParams.bankaAccount.length == 0) {
      isButtonDisable = true;
    }
    return isButtonDisable;
  }

  enableDateInput() {
    this.clearResult();
    this.checkFormParams.date = new Date();
  }

  public search(checkFrom) {
    this.clearResult();
    switch (this.inputValueOption) {
      case this.NIP: {
        this.checkFormParams.nip = this.inputCheckValue;
        this.checkService.checkByNipBankAccountDate(this.checkFormParams);
        break;
      }
      case this.REGON: {
        this.checkFormParams.regon = this.inputCheckValue;
        // this.searchByRegonAndDate()
        break;
      }
      default: {
        console.log('ERRORR!!');
      }
    }
    console.log('CHECK FORM  bank-> ' + this.checkFormParams.bankaAccount)
    console.log('CHECK FORM  date-> ' + this.checkFormParams.date)
    console.log('CHECK FORM  inv-> ' + this.checkFormParams.invoice)
    console.log('CHECK FORM  nip-> ' + this.checkFormParams.nip)
    console.log('CHECK FORM REGON-> ' + this.checkFormParams.regon)
    checkFrom.resetForm();
    this.clearSearchFields();
  }

  public clearResult() {
    this.checkService.clearCheckReport();
  }

  private bsConfigParams() {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },
      { dateInputFormat: this.dateFormat },
      { maxDate: new Date() });
  }

  private clearSearchFields() {

    this.inputCheckValue = 'Wpisz wartość';
    this.checkFormParams.nip = '';
    this.checkFormParams.regon = '';
    // this.isCheckValueInputDisable = true;

    this.dateCheckboxSelected = false;
    this.checkFormParams.date = new Date();

    this.checkFormParams.bankaAccount = '';
    this.inputBankValuePlaceholder = 'Wpisz numer konta';

    this.checkFormParams.invoice = '';
    this.inputInvoiceValuePlaceholder = 'Wpisz numer dokumentu';
  }

}
