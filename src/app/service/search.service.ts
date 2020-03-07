import { SearchReport } from 'src/app/model/searchreport';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { RequestParamDto } from '../model/requestParamDto';

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

  public searchReport(searchParams: RequestParamDto): Observable<SearchReport> {
    let result: Observable<SearchReport> = new Observable();

    if (searchParams.valueType == "NIP") {
      result = this.searchByNipAndDate(searchParams);
    } else if (searchParams.valueType == "REGON") {
      result = this.searchByREGONAndDate(searchParams);
    } else if (searchParams.valueType == "bankAccount") {
      result = this.searchByBankAccountAndDate(searchParams);
    }

    return result;
  }

  private searchByNipAndDate(searchParams: RequestParamDto): Observable<SearchReport> {
    const transformedDate: string = this.datePipe.transform(searchParams.date, 'yyyy-MM-dd');
    let params = new HttpParams()
      .append('nip', searchParams.value)
      .append('date', transformedDate);
    const result: Observable<SearchReport> = this.http.get<SearchReport>(this.WHITE_LIST_APP_ADDRESS + this.SEARCH_URI + this.nipAndDateURI,
      { params: params });

    result.subscribe((searchReport: SearchReport) => {
      searchReport.searchDate = searchParams.date;
      this.searchReport$.next(searchReport);
    })
    return result;
  }

  private searchByREGONAndDate(searchParams: RequestParamDto): Observable<SearchReport> {
    const transformedDate: string = this.datePipe.transform(searchParams.date, 'yyyy-MM-dd');
    let params = new HttpParams()
      .append('regon', searchParams.value)
      .append('date', transformedDate);
    const result: Observable<SearchReport> = this.http.get<SearchReport>(this.WHITE_LIST_APP_ADDRESS + this.SEARCH_URI + this.regonAndDateURI,
      { params: params });

    result.subscribe((searchReport: SearchReport) => {
      searchReport.searchDate = searchParams.date;
      this.searchReport$.next(searchReport);
    })
    return result;
  }

  private searchByBankAccountAndDate(searchParams: RequestParamDto): Observable<SearchReport> {
    const transformedDate: string = this.datePipe.transform(searchParams.date, 'yyyy-MM-dd');
    let params = new HttpParams()
      .append('bankAccount', searchParams.value)
      .append('date', transformedDate);
    const result: Observable<SearchReport> = this.http.get<SearchReport>(this.WHITE_LIST_APP_ADDRESS + this.SEARCH_URI + this.bankAccountAndDateURI,
      { params: params });

    result.subscribe((searchReport: SearchReport) => {
      searchReport.searchDate = searchParams.date;
      this.searchReport$.next(searchReport);
    })
    return result;
  }

  public getSearchReportListObs(): Observable<SearchReport> {
    return this.searchReport$.asObservable();
  }

  public clearSearchReport() {
    this.searchReport$.next(new SearchReport());
  }

}