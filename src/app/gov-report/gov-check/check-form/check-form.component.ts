import { CheckService } from './../../../service/check.service';
import { RequestParamDto } from './../../../model/requestParamDto';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-check-form',
  templateUrl: './check-form.component.html',
  styleUrls: ['./check-form.component.css']
})
export class CheckFormComponent implements OnInit {


  private readonly colorTheme: string = 'theme-dark-blue';
  private readonly dateFormat: string = 'YYYY-MM-DD';
  private readonly NIP = 'r-nip';
  private readonly REGON = 'r-regon';

  private bsConfig: Partial<BsDatepickerConfig>;

  @ViewChild('checkForm', { static: true })
  private checkF: NgForm;

  checkFormParams: RequestParamDto = new RequestParamDto();

  isCheckValueInputDisable: boolean = true;
  inputCheckValuePlaceholder: string = 'Wpisz wartość';
  checkValueInputMaxLength: number = 33;
  checkValueInputMinLength: number = 0;

  readonly inputBankValuePlaceholder: string = 'Wpisz numer konta';
  bankInputLength: number = 32;

  dateCheckboxSelected: boolean;
  isDateDisable = true;

  readonly inputInvoiceValuePlaceholder: string = 'Wpisz numer dokumentu'

  constructor(private checkService: CheckService) {
    this.bsConfigParams();
  }
//todo przerobić na formularz reacive
  ngOnInit() {

  }

  clickRadio(event: any) {
    this.clearResult();
    this.isCheckValueInputDisable = false;

    switch (event.target.id) {
      case this.NIP: {
        this.checkFormParams.valueType = 'NIP'
        this.inputCheckValuePlaceholder = "Wpisz numer NIP";
        this.checkValueInputMaxLength = 10;
        this.checkValueInputMinLength = 10;
        break;
      }
      case this.REGON: {
        this.checkFormParams.valueType = 'REGON'
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
    this.checkFormParams.value = '';
    this.inputCheckValuePlaceholder = '';
  }

  onFocusInputBankField() {
    this.checkFormParams.bankaAccount = '';
    // this.inputBankValuePlaceholder = '';
  }

  onFocusInputInvoice() {
    this.checkFormParams.invoice = '';
    // this.inputInvoiceValue Placeholder = '';
  }

  enableSearchButton(): boolean {
    let isButtonDisable: boolean = false;
    if (this.checkFormParams.value == null || this.checkFormParams.bankaAccount == null) {
      isButtonDisable = true;
    }
    else if (this.checkFormParams.value.length == 0 || this.checkFormParams.bankaAccount.length == 0) {
      isButtonDisable = true;
    }
    return isButtonDisable;
  }

  enableDateInput() {
    this.clearResult();
    this.isDateDisable = !this.isDateDisable;
    // this.checkFormParams.date = new Date();
  }

  public search(checkFrom) {
    this.checkService.checkReport(this.checkFormParams);

    console.log('CHECK FORM  bank-> ' + this.checkFormParams.bankaAccount)
    console.log('CHECK FORM  date-> ' + this.checkFormParams.date)
    console.log('CHECK FORM  inv-> ' + this.checkFormParams.invoice)
    console.log('CHECK FORM  value-> ' + this.checkFormParams.value)
    console.log('CHECK FORM  valueType-> ' + this.checkFormParams.valueType)


    this.clearSearchFields();
    this.clearResult();
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
    this.checkFormParams = new RequestParamDto();
    this.dateCheckboxSelected = false;
    this.inputCheckValuePlaceholder = 'Wpisz wartość';
  }

}
