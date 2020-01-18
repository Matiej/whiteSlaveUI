import { SearchReport } from 'src/app/model/searchreport';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly SEARCH_URI: string = '/search';
  private readonly nipAndDateURI: string = '/nip/date';
  private readonly bankAccountAndDateURI: string = '/bankAccount/date';
  private readonly regonAndDateURI = '/regon/date';

  private searchReport$ = new BehaviorSubject<SearchReport>(new SearchReport());

  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  public seachByNipAndDate(nip: string, date: Date, invoice: string): Observable<SearchReport> {

    let transformedDate: string = this.datePipe.transform(date, 'yyyy-MM-dd');
    let params = new HttpParams();
    params = params.append('nip', nip);
    params = params.append('date', transformedDate);

    return this.http.get<SearchReport>(this.WHITE_LIST_APP_ADDRESS + this.SEARCH_URI + this.nipAndDateURI,
      { params: params });

  }

  public searchByRegonAndDate(regon: string, date: Date, invoice: string): Observable<SearchReport> {

    let transformedDate: string = this.datePipe.transform(date, 'yyyy-MM-dd');
    const params = new HttpParams().set('regon', regon).set('date', transformedDate);

    return this.http.get<SearchReport>(this.WHITE_LIST_APP_ADDRESS + this.SEARCH_URI + this.regonAndDateURI,
      { params: params });

  }

  public searchByBankAccountAndDate(bankAccount: string, date: Date, invoice: string): Observable<SearchReport> {

    let transformedDate: string = this.datePipe.transform(date, 'yyyy-MM-dd');
    const params = new HttpParams().set('bankAccount', bankAccount).set('date', transformedDate);

    return this.http.get<SearchReport>(this.WHITE_LIST_APP_ADDRESS + this.SEARCH_URI + this.bankAccountAndDateURI,
      { params: params });

  }

  public getSearchReportListObs(): Observable<SearchReport> {
    return this.searchReport$.asObservable();
  }

  public showAndSendSearchReport(searchReport: SearchReport) {
    this.searchReport$.next(searchReport);
  }

  public clearSearchReport() {
    this.searchReport$.next(new SearchReport());
  }

}