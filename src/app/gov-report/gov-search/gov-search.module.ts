
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GovSearchComponent, SearchFormComponent, SearchResultComponent } from '.';
import { GovSearchReportRoutingModule } from './gov-serach.routing.module';


@NgModule({
    declarations: [
        GovSearchComponent,
        SearchFormComponent,
        SearchResultComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        GovSearchReportRoutingModule    
    ]
})

export class GovSearchReportModule {
}