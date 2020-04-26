import { GovSearchComponent } from './gov-search/gov-search.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GovCheckComponent } from './gov-check/gov-check.component';

const routes: Routes = [
    {
        path: 'searchreport',
        component: GovSearchComponent
    },

    {
        path: 'checkreport',
        component: GovCheckComponent

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class GovReportRoutingModule { }