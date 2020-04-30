import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ArchCheckReportComponent, ArchCheckReportDetailsComponent, ArchCheckReportListComponent, ArchReportComponent, ArchSearchReportComponent, ArchSearchReportListComponent } from '.';
import { ArchCheckReportRoutingModule } from './arch-checkreport.routing.module';
import { ArchSearchReportRoutingModule } from './arch-searchreport.routing.module';

@NgModule({
    declarations: [
        ArchCheckReportComponent,
        ArchCheckReportDetailsComponent,
        ArchCheckReportListComponent,
        ArchReportComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ArchCheckReportRoutingModule
    ]
})

export class ArchCheckReportModule { }

@NgModule({
    declarations: [
        ArchSearchReportComponent,
        ArchSearchReportListComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ArchSearchReportRoutingModule
    ]
})
export class ArchSearchReportModule { }