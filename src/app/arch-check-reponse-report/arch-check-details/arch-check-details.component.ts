import { ArchResponseReport } from './../../model/archResponseReport';
import { ArchiveService } from './../../service/archive.service';
import { ArchReportSyncRequest } from './../../model/archReportSyncRequest';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-arch-check-details',
  templateUrl: './arch-check-details.component.html',
  styleUrls: ['./arch-check-details.component.css']
})
export class ArchCheckDetailsComponent implements OnInit {

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
