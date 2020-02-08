import { CheckReportDto } from './../model/checkReportDto';
import { RequestParamDto } from './../model/requestParamDto';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchReport } from '../model/searchreport';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly CHECK_URI: string = '/check';
  private readonly nipBankAccoutDateURI: string = '"/nip&bankaccount/date"';
  private readonly regonBankAccoutDateURI: string = '/regon&bankaccount/date';
  private readonly regonAndDateURI = '/regon/date';

  private checkReport$ = new BehaviorSubject<SearchReport>(new SearchReport());


  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  public checkByNipBankAccountDate(checkParams: RequestParamDto): Observable<CheckReportDto> {

    const transformedDate: string = this.datePipe.transform(checkParams.date, 'yyyy-MM-dd');
    let params = new HttpParams();
    params = params.append('nip', checkParams.nip);
    params = params.append('bankAccount', checkParams.bankaAccount);
    params = params.append('date', transformedDate);

    return this.http.get<CheckReportDto>(this.WHITE_LIST_APP_ADDRESS + this.CHECK_URI + this.nipBankAccoutDateURI,
      { params: params });
  }

  public checkByRegonBankAccountDate(checkParams: RequestParamDto): Observable<CheckReportDto> {
    const transformedDate: string = this.datePipe.transform(checkParams.date, 'yyyy-MM-dd');
    let params = new HttpParams();
    params.append('regon', checkParams.regon);
    params.append('bankAccount', checkParams.bankaAccount);
    params.append('date', transformedDate);

    return this.http.get<CheckReportDto>(this.WHITE_LIST_APP_ADDRESS + this.CHECK_URI + this.regonBankAccoutDateURI,
      { params: params })
  }

  

}