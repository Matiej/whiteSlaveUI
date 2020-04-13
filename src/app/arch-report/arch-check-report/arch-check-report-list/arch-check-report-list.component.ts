import { Component, OnInit, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ArchCheckReport } from 'src/app/model/archCheckReport';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ArchiveService } from 'src/app/service/archive.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-arch-check-report-list',
  templateUrl: './arch-check-report-list.component.html',
  styleUrls: ['./arch-check-report-list.component.css'],
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
export class ArchCheckReportListComponent implements OnInit, AfterViewInit {

  archCheckResponseReports: Array<ArchCheckReport>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  dataSource: MatTableDataSource<ArchCheckReport>;

  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private archService: ArchiveService) { }

  ngOnInit() {
    this.archService.findAllSyncCheckReports()
      .subscribe((archCheckResponseReportList: Array<ArchCheckReport>) => {
        this.archCheckResponseReports = archCheckResponseReportList;
        this.dataSource = new MatTableDataSource(this.archCheckResponseReports);
      });
  }

  ngAfterViewInit(): void {
    this.archService.findAllSyncCheckReports()
      .subscribe((archCheckResponseReportList: Array<ArchCheckReport>) => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    // displayedCol.push('id');
    displayedCol.push('requestId');
    displayedCol.push('accountAssigned');
    displayedCol.push('requestDate')
    displayedCol.push('requestNip')
    return displayedCol;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  sendDetails(id: string) {
    this.archService.findSyncCheckReportById(id);
  }

}
