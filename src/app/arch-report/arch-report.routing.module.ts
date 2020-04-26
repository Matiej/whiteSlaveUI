import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {
    ArchCheckReportComponent,
    ArchCheckReportDetailsComponent,
    ArchSearchReportComponent
} from '.';

const formReactivenExRouting: Routes = [
    {
        path: 'archcheckreports',
        component: ArchCheckReportComponent,
        children: [
            {
                path: ':requestId',
                component: ArchCheckReportDetailsComponent
            }
        ]
    },
    {
        path: 'archsearchreports',
        component: ArchSearchReportComponent
    }
]

@NgModule({
    imports: [

        [RouterModule.forChild(formReactivenExRouting)]
    ],
    exports: [
        RouterModule
    ]
})

export class ArchReportRoutingModule {



}