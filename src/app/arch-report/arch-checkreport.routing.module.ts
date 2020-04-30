import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ArchCheckReportComponent, ArchCheckReportDetailsComponent } from '.';

export const checkRouting: Routes = [
    {   //lazy loading
        // path: 'archcheckreports',
        path: '',
        component: ArchCheckReportComponent,
        children: [
            {
                path: ':requestId',
                component: ArchCheckReportDetailsComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        [RouterModule.forChild(checkRouting)]
    ],
    exports: [
        RouterModule
    ]
})
export class ArchCheckReportRoutingModule {
}
