import { SearchService } from './../service/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-report',
  templateUrl: './search-report.component.html',
  styleUrls: ['./search-report.component.css']
})
export class SearchReportComponent implements OnInit {



  constructor(private searchReportServ: SearchService) { }

  ngOnInit() {
  }



}
