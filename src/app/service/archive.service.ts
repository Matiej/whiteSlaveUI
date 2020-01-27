import { Observable } from 'rxjs';
import { ArchReportSyncRequest } from './../model/archReportSyncRequest';
import { ArchResponseReport } from './../model/archResponseReport';
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
  
  constructor(private datePipe: DatePipe, private http: HttpClient) { }

  public findAllSyncCheckReports(): Observable<Array<ArchResponseReport>> {
  return this.http.get<Array<ArchResponseReport>>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
    + this.ARCH_CHECK_REPORTS);
  }

  public findSyncCheckReportById(id: string): Observable<ArchResponseReport> {
    const idParam = new HttpParams().set('id', id);
    return this.http.get<ArchResponseReport>(this.WHITE_LIST_APP_ADDRESS + this.REPORT_QUERY_URI
      + this.ARCH_CHECK_REPORT_BYID, {params: idParam});
  }
 
}
