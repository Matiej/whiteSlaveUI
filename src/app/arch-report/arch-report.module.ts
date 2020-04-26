import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchReportRoutingModule } from './arch-report.routing.module';
import { SharedModule } from '../shared/shared.module';
import {
    ArchReportComponent,
    ArchCheckReportComponent,
    ArchCheckReportDetailsComponent,
    ArchCheckReportListComponent,
    ArchSearchReportComponent,
    ArchSearchReportListComponent
} from '.';


@NgModule({
    declarations: [
        ArchReportComponent,
        ArchCheckReportComponent,
        ArchCheckReportDetailsComponent,
        ArchCheckReportListComponent,
        ArchSearchReportComponent,
        ArchSearchReportListComponent,
    ],
    imports: [
        CommonModule,
        ArchReportRoutingModule,
        SharedModule

    ]
})

export class ArchReportModule {



}