import { ArchSearchReport } from './../../../model/archSearchReport';
import { ArchiveService } from 'src/app/service/archive.service';
import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ArchCheckReport } from 'src/app/model/archCheckReport';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-arch-search-report-list',
  templateUrl: './arch-search-report-list.component.html',
  styleUrls: ['./arch-search-report-list.component.css'],
  animations: [
    trigger("detailExpand", [
      state(
        "void",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("*", style({ height: "*", visibility: "visible" })),
      transition("void <=> *", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ]
})
export class ArchSearchReportListComponent implements OnInit, AfterViewInit {

  arachSearchReportList: Array<ArchSearchReport> = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  dataSource: MatTableDataSource<ArchSearchReport>;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private archService: ArchiveService) { }

  ngOnInit() {
    this.archService.findAllArchiveSearchReports()
    .subscribe((archSearchReportList: Array<ArchSearchReport>) => {
      this.arachSearchReportList = archSearchReportList;
      this.dataSource = new MatTableDataSource(this.arachSearchReportList);
    })
  }

  //TODO -> może jest inny sposób aby dwa razy nie robić findAll
  ngAfterViewInit(): void {
    
    this.archService.findAllArchiveSearchReports()
    .subscribe((archSearchReportList: Array<ArchSearchReport>) => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.arachSearchReportList = archSearchReportList;
    })
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    displayedCol.push('requestId');
    displayedCol.push('name');
    displayedCol.push('requestDate')
    displayedCol.push('requestNip')
    displayedCol.push('requestBankAccount')
    displayedCol.push('searchResult');
    displayedCol.push('subjectNo');
    displayedCol.push('statusVat');
    return displayedCol;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  sendDetails(id: string) {
    this.archService.findSyncSearchReportById(id);
  }

}
