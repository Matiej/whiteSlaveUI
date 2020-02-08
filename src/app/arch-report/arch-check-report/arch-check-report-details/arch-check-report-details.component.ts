import { Component, OnInit } from '@angular/core';
import { ArchResponseReport } from 'src/app/model/archResponseReport';
import { ArchiveService } from 'src/app/service/archive.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-arch-check-report-details',
  templateUrl: './arch-check-report-details.component.html',
  styleUrls: ['./arch-check-report-details.component.css']
})
export class ArchCheckReportDetailsComponent implements OnInit {

  archReportRequest: ArchResponseReport = new ArchResponseReport();
 
  constructor(private archService: ArchiveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      this.archService.findSyncCheckReportById(param.get('id'))
        .subscribe((archResponseReport: ArchResponseReport) => {
           this.archReportRequest = archResponseReport;
        });
    });
  }


}
