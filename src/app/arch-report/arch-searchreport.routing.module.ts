import { ArchSearchReportDetailsComponent } from './arch-search-report/arch-search-report-details/arch-search-report-details.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
    ArchSearchReportComponent
} from '.';
import { AuthGuardService } from '../service/authguard.service';

const searchRouting: Routes = [
    {
        path: '',
        component: ArchSearchReportComponent,
        canActivateChild: [AuthGuardService],
        children: [
            {
                path: ':requestId',
                component: ArchSearchReportDetailsComponent
            }
        ]
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