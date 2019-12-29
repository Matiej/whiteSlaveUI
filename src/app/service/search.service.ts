import { Injectable } from '@angular/core';
import { SearchReport } from '../model/searchreport';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchReportList: Array<SearchReport> = []
  private searchReportListObs = new BehaviorSubject<Array<SearchReport>>([]);

  constructor(private datePipe: DatePipe) { }

  searchByBankAccountAndDate(bankAccount: string, date: Date, invoice: string): void {
    console.log("strał do backaendu!!~BUM");
    let transformedDate: string = this.datePipe.transform(date, 'yyyy-MM-dd');
    let httpResult = this.testSeachResult(bankAccount + ' <-> ' + transformedDate + ', invoice: ' + invoice);
    console.log('numer konta: ' + bankAccount);
    console.log('data: ' + date);
    this.searchReportListObs.next(httpResult);

  }

  public getSearchReportListObs(): Observable<Array<SearchReport>> {
    return this.searchReportListObs.asObservable();

  }

  private testSeachResult(someParam: string): Array<SearchReport> {
    let testReport = new SearchReport();
    testReport.requestId = someParam + 'XXX';
    return [testReport];
  }


}