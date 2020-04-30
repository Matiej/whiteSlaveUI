import { GovCheckReportRoutingModule } from './gov.check.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GovCheckComponent, CheckFormComponent, CheckResultComponent } from '.';



@NgModule({
    declarations: [
        GovCheckComponent,
        CheckFormComponent,
        CheckResultComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        GovCheckReportRoutingModule
    ],
    exports: [GovCheckComponent]
})

export class GovCheckReportModule {
}