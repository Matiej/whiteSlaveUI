import { CheckReportDto } from './../model/checkReportDto';
import { RequestParamDto } from './../model/requestParamDto';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly CHECK_URI: string = '/check';
  private readonly nipBankAccoutDateURI: string = '/nip&bankaccount/date';
  private readonly regonBankAccoutDateURI: string = '/regon&bankaccount/date';

  private checkReport$ = new BehaviorSubject<CheckReportDto>(new CheckReportDto());

  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  public checkReport(checkParams: RequestParamDto): Observable<CheckReportDto> {
    if (checkParams.valueType == "REGON") {
      return this.checkByRegonBankAccountDate(checkParams);
    } else if (checkParams.valueType == "NIP") {
      return this.checkByNipBankAccountDate(checkParams);
    }
  }

  private checkByNipBankAccountDate(checkParams: RequestParamDto): Observable<CheckReportDto> {

    const transformedDate: string = this.datePipe.transform(checkParams.date, 'yyyy-MM-dd');
    let params = new HttpParams()
      .append('nip', checkParams.value)
      .append('bankAccount', checkParams.bankaAccount)
      .append('date', transformedDate);

    const result: Observable<CheckReportDto> = this.http.get<CheckReportDto>(this.WHITE_LIST_APP_ADDRESS + this.CHECK_URI + this.nipBankAccoutDateURI,
      { params: params });

    this.prepareSearchResult(result, checkParams);
    return result;
  }

  private checkByRegonBankAccountDate(checkParams: RequestParamDto): Observable<CheckReportDto> {
    const transformedDate: string = this.datePipe.transform(checkParams.date, 'yyyy-MM-dd');
    let params = new HttpParams()
      .append('regon', checkParams.value)
      .append('bankAccount', checkParams.bankaAccount)
      .append('date', transformedDate);

    const result = this.http.get<CheckReportDto>(this.WHITE_LIST_APP_ADDRESS + this.CHECK_URI + this.regonBankAccoutDateURI,
      { params: params });

    this.prepareSearchResult(result, checkParams);
    return result;
  }

  private prepareSearchResult(httpResponse: Observable<CheckReportDto>, params: RequestParamDto): void {
    let checkReportDto: CheckReportDto = new CheckReportDto();
    checkReportDto.searchAccount = params.bankaAccount;
    checkReportDto.searchDate = params.date;
    checkReportDto.searchInvoice = params.invoice;
    checkReportDto.searchNip = params.value;

    httpResponse.subscribe((checkReport: CheckReportDto) => {
      checkReportDto.requestId = checkReport.requestId;
      checkReportDto.accountAssigned = checkReport.accountAssigned;
      this.checkReport$.next(checkReportDto);
    })
  }

  public getCheckReportListObs(): Observable<CheckReportDto> {
    return this.checkReport$.asObservable();
  }

  public clearCheckReport(): void {
    this.checkReport$.next(new CheckReportDto());
  }



}