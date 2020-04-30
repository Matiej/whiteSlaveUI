import { GovSearchComponent } from './gov-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const checkReportRoutes: Routes = [
    {
        path: '',
        // path: 'checkreport',
        component: GovSearchComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(checkReportRoutes)],
    exports: [RouterModule],
})

export class GovSearchReportRoutingModule { }