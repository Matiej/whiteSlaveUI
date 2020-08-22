import { GovSearchComponent } from './gov-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const searchReportRoutes: Routes = [
    {
        path: '',
        // path: 'checkreport',
        component: GovSearchComponent
    }
];


@NgModule({
    imports: [RouterModule.forChild(searchReportRoutes)],
    exports: [RouterModule],
})

export class GovSearchReportRoutingModule { }