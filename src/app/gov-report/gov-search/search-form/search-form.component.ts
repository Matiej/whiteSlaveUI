import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap';
import { SearchService } from 'src/app/service/search.service';
import { SearchReport } from 'src/app/model/searchreport';
import { FormGroup, FormControl, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { RequestParamDto } from 'src/app/model/requestParamDto';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {


  private readonly colorTheme: string = 'theme-dark-blue';
  private readonly dateFormat: string = 'YYYY-MM-DD';
  bsConfig: Partial<BsDatepickerConfig>;

  searchFormParams: RequestParamDto = new RequestParamDto();
  inputSearchValuePlacholder: string = 'Wybierz typ paramentru szukania';
  inputInvoicePlaceHolder = ' Wpisz wartość';
  inputDateValue: Date = new Date();
  acutalDate: Date = new Date();
  searchFormular: FormGroup;

  constructor(private searchService: SearchService) {
    this.bsConfigParams();
  }

  ngOnInit() {
    this.searchFormular = new FormGroup({
      typeValue: new FormControl(null, Validators.required),
      searchValue: new FormControl({ value: null, disabled: true }, [Validators.required]),
      inputDateValue: new FormControl({ value: new Date(), disabled: true }, Validators.required),
      inputInvoice: new FormControl(null, Validators.maxLength(100)),
      chbbx: new FormControl(false)
    });

    this.typeValueChangeSearchValeValidator();
    this.dateInputValueRefresh()
  }

  sumbmitSearchForm(): void {
    this.searchFormParams.valueType = this.searchFormular.value.typeValue;
    this.searchFormParams.value = this.searchFormular.value.searchValue;
    this.searchFormParams.date = this.searchFormular.get('inputDateValue').value;
    this.searchFormParams.invoice = this.searchFormular.value.inputInvoice;
    const typeFormValue: string = this.searchFormular.value.typeValue;

    this.searchService.searchReport(this.searchFormParams);

    this.onReset();
  }

  private onReset() {
    this.searchFormular.reset({
      chbbx: false,
      inputDateValue: { value: new Date(), disabled: true }
    });
  }

  enableDateInputForm(): void {
    if (this.searchFormular.controls.inputDateValue.disabled) {
      this.searchFormular.controls.inputDateValue.enable();
    } else {
      this.searchFormular.controls.inputDateValue.disable();
    }
    if (this.searchFormular.controls.inputDateValue.disabled) {
      this.searchFormular.patchValue({
        inputDateValue: new Date()
      })
    }
  }

  private bsConfigParams(): void {
    this.bsConfig = Object.assign({}, { containerClass: this.colorTheme },
      { dateInputFormat: this.dateFormat },
      { maxDate: new Date() });
  }
  //todo NAPISAC WALIDATORY!!!!!
  private nipValidator(control: AbstractControl): ValidationErrors {
    const searchVal = <string>control.value;
    console.log('CONTROL nipvalidator');
    console.log(control);
    return searchVal != null && searchVal.length < 5 ? { nipValidated: true } : null;
  }

  private regonValidator(control: AbstractControl): ValidationErrors {
    const searchVal = <string>control.value;
    console.log('CONTROL regonValidator');
    console.log(control);
    return searchVal != null && searchVal.length < 5 ? { regonValidated: true } : null;
  }

  private bankAccountValidator(control: AbstractControl): ValidationErrors {
    const searchVal = <string>control.value;
    console.log('CONTROL bank validator');
    console.log(control);
    return searchVal != null && searchVal.length < 10 ? { bankAccountValidated: true } : null;
  }

  private typeValueChangeSearchValeValidator() {
    this.searchFormular.get('typeValue')
      .valueChanges
      .subscribe(value => {
        const searchValueFiled = this.searchFormular.get('searchValue')
        if (value == 'NIP') {
          searchValueFiled.reset();
          this.inputSearchValuePlacholder = 'Wpisz poprawną wartość NIP';
          searchValueFiled.enable();
          searchValueFiled.setValidators([Validators.required, this.nipValidator]);
        } else if (value == 'REGON') {
          searchValueFiled.reset();
          this.inputSearchValuePlacholder = 'Wpisz poprawną wartość REGON';
          searchValueFiled.enable();
          searchValueFiled.setValidators([Validators.required, this.regonValidator]);
        } else if (value == 'bankAccount') {
          searchValueFiled.reset();
      this.inputSearchValuePlacholder = 'Wpisz numer konta (tylko cyfry)';
          searchValueFiled.enable();
          searchValueFiled.setValidators([Validators.required, this.bankAccountValidator]);
        }
      });
  }
 
  private dateInputValueRefresh() {
    this.searchFormular.get('inputDateValue')
      .valueChanges.subscribe(value => {
        this.inputDateValue = value;
      });
  }

}
