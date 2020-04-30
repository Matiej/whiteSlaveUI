import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
    ArchSearchReportComponent
} from '.';

const searchRouting: Routes = [
    {
        path: '',
        component: ArchSearchReportComponent
    }
]
@NgModule({
    imports: [
        [RouterModule.forChild(searchRouting)]
    ],
    exports: [
        RouterModule
    ]
})

export class ArchSearchReportRoutingModule { }