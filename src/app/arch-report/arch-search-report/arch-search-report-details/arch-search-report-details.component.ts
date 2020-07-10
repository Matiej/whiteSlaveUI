import { ArchSearchReportDetails } from './../../../model/archSearchReportDetails';
import { Component, OnInit } from '@angular/core';
import { ArchiveService } from 'src/app/service/archive.service';

@Component({
  selector: 'app-arch-search-report-details',
  templateUrl: './arch-search-report-details.component.html',
  styleUrls: ['./arch-search-report-details.component.css']
})
export class ArchSearchReportDetailsComponent implements OnInit {

  archReportRequest: ArchSearchReportDetails = new ArchSearchReportDetails();

  constructor(private archService: ArchiveService) { }

  ngOnInit() {
    this.archService.getSearchReportDetails().subscribe(searchReportDetails => {
      this.archReportRequest = searchReportDetails;
    })
  }

  public downloadFile(id: string): void {
    const fileSource = this.archService.downloadPdfReportFile(id);
    fileSource.subscribe(fs => {
      window.open(window.URL.createObjectURL(fs));
    })
  }

}
