import { GovReportRoutingModule } from './gov-report.routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import {
    GovReportComponent,
    GovSearchComponent,
    GovCheckComponent,
    SearchFormComponent,
    SearchResultComponent,
    CheckFormComponent,
    CheckResultComponent
} from '.';


@NgModule({
    declarations: [
        GovReportComponent,
        GovSearchComponent,
        GovCheckComponent,
        SearchFormComponent,
        SearchResultComponent,
        CheckFormComponent,
        CheckResultComponent
    ],
    imports: [
        CommonModule,
        GovReportRoutingModule,
        SharedModule
    ]
})

export class GovReportModule {
}