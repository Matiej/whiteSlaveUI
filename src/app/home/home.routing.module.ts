import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '.';

const homeRouting: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: HomeComponent
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(homeRouting),
    ],
    exports: [RouterModule]
})

export class HomeRoutingModule { };
