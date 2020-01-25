import { Observable } from 'rxjs';
import { ArchReportSyncRequest } from './../model/archReportSyncRequest';
import { ArchResponseReport } from './../model/archResponseReport';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private datePipe: DatePipe,) { }

  public getArchReponseReports(): Observable<Array<ArchResponseReport>> {
    return of(this.generateArchCheckReports());
  }
  public getArchResponseById(id: number): ArchResponseReport {
    return this.generateArchCheckReports()
      .find(p => p.id == id);
  }




  private generateArchCheckReports(): Array<ArchResponseReport> {

    const report1: ArchReportSyncRequest = new ArchReportSyncRequest();
    report1.id = 1;
    report1.pdfFileName = 'pdf1';
    report1.reportType = 'CHECK';
    report1.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    report1.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    report1.requestNip = 'PL1111';
    const report2: ArchReportSyncRequest = new ArchReportSyncRequest();
    report2.id = 2;
    report2.pdfFileName = 'pdf2';
    report2.reportType = 'CHECK';
    report2.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    report2.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    report2.requestRegon = '00112132';

    const response1: ArchResponseReport = new ArchResponseReport();
    response1.accountAssigned = 'TAK';
    response1.id = 1;
    response1.requestId = '321dsada';
    response1.pdfFileName = 'pdf1';
    response1.reportType = 'CHECK';
    response1.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response1.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response1.requestRegon = '00112132';

    let response2: ArchResponseReport = new ArchResponseReport();
    response2.accountAssigned = 'NIE';
    response2.id = 2;
    response2.requestId = 'sad1sd35233542a';
    response2.pdfFileName = 'pdf1';
    response2.reportType = 'CHECK';
    response2.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response2.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response2.requestNip = '11800112132';

    let response3: ArchResponseReport = new ArchResponseReport();
    response3.accountAssigned = 'NIE';
    response3.id = 3;
    response3.requestId = 'sad1sd35233542a';
    response3.pdfFileName = 'pdf1';
    response3.reportType = 'CHECK';
    response3.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response3.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response3.requestRegon = '00112132';

    let response4: ArchResponseReport = new ArchResponseReport();
    response4.accountAssigned = 'TAK';
    response4.id = 4;
    response4.requestId = 'sad1sd35233542a';
    response4.pdfFileName = 'pdf1';
    response4.reportType = 'CHECK';
    response4.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response4.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response4.requestRegon = '100112132';
    
    let response5: ArchResponseReport = new ArchResponseReport();
    response5.accountAssigned = 'NIE';
    response5.id = 5;
    response5.requestId = 'sad1sd35233542a';
    response5.pdfFileName = 'pdf1';
    response5.reportType = 'CHECK';
    response5.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response5.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response5.requestNip = '94800112132';

    let response6: ArchResponseReport = new ArchResponseReport();
    response6.accountAssigned = 'NIE';
    response6.id = 6;
    response6.requestId = 'sad1sd35233542a';
    response6.pdfFileName = 'pdf1';
    response6.reportType = 'CHECK';
    response6.reportDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response6.requestDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    response6.requestRegon = '00112132';

    return [response1, response2, response3, response4, response5, response6];

  }
}
