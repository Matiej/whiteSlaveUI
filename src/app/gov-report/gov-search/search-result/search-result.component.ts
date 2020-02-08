import { Component, OnInit } from '@angular/core';
import { SearchReport } from 'src/app/model/searchreport';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

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
