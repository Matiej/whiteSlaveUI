import { Component, OnInit } from '@angular/core';
import { ArchCheckReport } from 'src/app/model/archCheckReport';
import { ArchiveService } from 'src/app/service/archive.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-arch-check-report-details',
  templateUrl: './arch-check-report-details.component.html',
  styleUrls: ['./arch-check-report-details.component.css']
})
export class ArchCheckReportDetailsComponent implements OnInit {

  archReportRequest: ArchCheckReport = new ArchCheckReport();
 
  constructor(private archService: ArchiveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param: Params) => {
      console.log(param);
      this.archService.findSyncCheckReportById(param.get('id'))
        .subscribe((archResponseReport: ArchCheckReport) => {
           this.archReportRequest = archResponseReport;
        });
    });
  }


}
