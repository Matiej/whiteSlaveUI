import { SearchService } from './../../service/search.service';
import { Component, OnInit } from '@angular/core';
import { SearchReport } from 'src/app/model/searchreport';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.css']
})
export class ResultSearchComponent implements OnInit {

  searchReport: SearchReport;

  constructor(private searchService: SearchService) {
    this.getSearchReportListObs();
  }

  ngOnInit() {
  }

  private getSearchReportListObs(): void {
    this.searchService.getSearchReportListObs().subscribe(search => {
      this.searchReport = search;
      console.log(search.requestId);
    });

  }



}
