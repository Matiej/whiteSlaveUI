import { ArchResponseReport } from 'src/app/model/archResponseReport';
import { ArchiveService } from 'src/app/service/archive.service';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import {
  trigger,
  state,
  transition,
  animate,
  style
} from "@angular/animations";

@Component({
  selector: 'app-arch-check-reponse-list',
  templateUrl: './arch-check-reponse-list.component.html',
  styleUrls: ['./arch-check-reponse-list.component.css'],

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
export class ArchCheckReponseListComponent implements OnInit, AfterViewInit {

  archCheckResponseReports: Array<ArchResponseReport>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;
  dataSource: MatTableDataSource<ArchResponseReport>;


  isExpansionDetailRow = (index, row) => row.hasOwnProperty("detailRow");

  constructor(private archService: ArchiveService) { }

  ngOnInit() {
      this.archService.findAllSyncCheckReports()
      .subscribe((archCheckResponseReportList: Array<ArchResponseReport>) => {
        console.log('sssiize:  ' + archCheckResponseReportList.length);
        this.archCheckResponseReports = archCheckResponseReportList;
        this.dataSource = new MatTableDataSource(this.archCheckResponseReports);
      });
  }

  ngAfterViewInit(): void {
       this.archService.findAllSyncCheckReports()
      .subscribe((archCheckResponseReportList: Array<ArchResponseReport>) => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  createDisplayedColumns(): Array<string> {
    const displayedCol: string[] = [];
    displayedCol.push('id');
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


}
