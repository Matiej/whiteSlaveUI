import { ArchResponseReport } from './../model/archResponseReport';
import { ArchiveService } from './../service/archive.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arch-check-reponse-report',
  templateUrl: './arch-check-reponse-report.component.html',
  styleUrls: ['./arch-check-reponse-report.component.css']
})
export class ArchCheckReponseReportComponent implements OnInit {

  archCheckResponseReports: Array<ArchResponseReport>;

  constructor(private archService: ArchiveService) { }

  ngOnInit() {
    this.archService.getArchReponseReports()
    .subscribe((archCheckResponseReportList: Array<ArchResponseReport>)=> {
      this.archCheckResponseReports = archCheckResponseReportList;
    })
  }


}
