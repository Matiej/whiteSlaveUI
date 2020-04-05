import { ArchSearchReport } from './../model/archSearchReport';
import { ArchSearchReportComponent } from './../arch-report/arch-search-report/arch-search-report.component';
import { Observable } from 'rxjs';
import { ArchCheckReport } from './../model/archCheckReport';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly REPORT_QUERY_URI: string = '/reportquery';
  private readonly ARCH_CHECK_REPORTS: string = '/checkSyncReports';
  private readonly ARCH_CHECK_REPORT_BYID: string = '/checkSyncReport';
  private readonly ARCH_SEARCH_REPORTS: string = '/searchSyncReports';
  
  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  public findAllSyncCheckReports(): Observable<Array<ArchCheckReport>> {
  return this.http.get<Array<ArchCheckReport>>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
    + this.ARCH_CHECK_REPORTS);
  }

  public findSyncCheckReportById(id: string): Observable<ArchCheckReport> {
    const idParam = new HttpParams().set('id', id);
    return this.http.get<ArchCheckReport>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_CHECK_REPORT_BYID, {params: idParam});
  }

  public findAllArchiveSearchReports(): Observable<Array<ArchSearchReport>> {
    return this.http.get<Array<ArchSearchReport>>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_SEARCH_REPORTS);
  }
 
}
