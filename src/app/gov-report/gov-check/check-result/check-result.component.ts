import { CheckService } from './../../../service/check.service';
import { CheckReportDto } from './../../../model/checkReportDto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.css']
})
export class CheckResultComponent implements OnInit {

  checkReport: CheckReportDto;

  constructor(private checkServce: CheckService) {
    this.getCheckReortListObs();
  }

  ngOnInit() {
  }

  private getCheckReortListObs(): void {
    this.checkServce.getCheckReportListObs().subscribe(check => {
      console.log(check.accountAssigned);
      this.checkReport = check;
    })
  }

}
