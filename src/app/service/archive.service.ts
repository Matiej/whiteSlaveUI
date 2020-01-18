import {Observable} from 'rxjs';
import { ArchReportSyncRequest } from './../model/archReportSyncRequest';
import { ArchResponseReport } from './../model/archResponseReport';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor() { }


  public getArchReponseReports(): Observable<Array<ArchResponseReport>> {
    return of(this.generateArchCheckReports());
  }

  public getArchReposnseReportById(id: number): ArchResponseReport {
    return this.generateArchCheckReports().find(p=> p.id === id);
  }

  private generateArchCheckReports(): Array<ArchResponseReport> {

    const report1: ArchReportSyncRequest = new ArchReportSyncRequest();
    report1.id = 1;
    report1.pdfFileName = 'pdf1';
    report1.reportType = 'CHECK';
    report1.reportDate = new Date();
    report1.requestDate = new Date();
    report1.requestNip = 'PL1111';
    const report2: ArchReportSyncRequest = new ArchReportSyncRequest();
    report2.id = 2;
    report2.pdfFileName = 'pdf2';
    report2.reportType = 'CHECK';
    report2.reportDate = new Date();
    report2.requestDate = new Date();
    report2.requestRegon = '00112132';

    const response1: ArchResponseReport = new ArchResponseReport();
    response1.accountAssigned = 'TAK';
    response1.id = 1;
    response1.requestId = '321dsada';
    response1.archRerpotSyncRequest = report1;

    let response2: ArchResponseReport = new ArchResponseReport();
    response2.accountAssigned = 'TAK';
    response2.id = 2;
    response2.requestId = 'sad1sd35233542asdada';
    response2.archRerpotSyncRequest = report2;

    return [response1, response2];

  }
}
