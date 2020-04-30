import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovCheckComponent, CheckFormComponent, CheckResultComponent } from '.';

const checkReportRoutes: Routes = [
    {
        path: '',
        component: GovCheckComponent

    }
];

@NgModule({
    imports: [RouterModule.forChild(checkReportRoutes)],
    exports: [RouterModule],
 
})

export class GovCheckReportRoutingModule { }