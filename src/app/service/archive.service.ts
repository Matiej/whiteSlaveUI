import { ArchSearchReportDetailsComponent } from './../arch-report/arch-search-report/arch-search-report-details/arch-search-report-details.component';
import { ArchCheckReportComponent } from './../arch-report/arch-check-report/arch-check-report.component';
import { ArchSearchReport } from './../model/archSearchReport';
import { ArchSearchReportComponent } from './../arch-report/arch-search-report/arch-search-report.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { ArchCheckReport } from './../model/archCheckReport';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ArchSearchReportDetails } from '../model/archSearchReportDetails';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly REPORT_QUERY_URI: string = '/reportquery';
  private readonly ARCH_CHECK_REPORTS: string = '/checkSyncReports';
  private readonly ARCH_CHECK_REPORT_BYID: string = '/checkSyncReport';
  private readonly ARCH_SEARCH_REPORTS: string = '/searchSyncReports';
  private readonly ARCH_SEARCH_REPORT_BYID: string = '/searchSyncReport';

  private checkReportDetails$ = new BehaviorSubject<ArchCheckReport>(new ArchCheckReport());
  private searchReportDetails$ = new BehaviorSubject<ArchSearchReportDetails>(new ArchSearchReportDetails());

  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  public findAllSyncCheckReports(): Observable<Array<ArchCheckReport>> {
    return this.http.get<Array<ArchCheckReport>>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_CHECK_REPORTS);
  }

  public findSyncCheckReportById(id: string): Observable<ArchCheckReport> {
    const idParam = new HttpParams().set('id', id);
    const result = this.http.get<ArchCheckReport>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_CHECK_REPORT_BYID, { params: idParam });

    result.subscribe(checkReport => {
      this.checkReportDetails$.next(checkReport);
    })

    return result;
  }

  public findAllArchiveSearchReports(): Observable<Array<ArchSearchReport>> {
    // this.findSyncSearchReportById('1');
    return this.http.get<Array<ArchSearchReport>>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_SEARCH_REPORTS);
  }

  public findSyncSearchReportById(id: string): Observable<ArchSearchReportDetails> {
    const idParam = new HttpParams().set('id', id);
    const result = this.http.get<ArchSearchReportDetails>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_SEARCH_REPORT_BYID, { params: idParam })

    result.subscribe(searchReportDetails => {
      this.searchReportDetails$.next(searchReportDetails);
   
    })
    return result;
  }

  public getCheckReportDetails(): Observable<ArchCheckReport> {
    return this.checkReportDetails$.asObservable();
  }

  public getSearchReportDetails(): Observable<ArchSearchReportDetails> {
    return this.searchReportDetails$.asObservable();
  }

}
