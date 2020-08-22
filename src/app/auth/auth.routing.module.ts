import { AuthGuardService } from './../service/authguard.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const authRoutes: Routes = [

    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuardService]
    }
];


@NgModule({
    imports:
        [
            CommonModule,
            RouterModule.forChild(authRoutes)
        ],
    exports: [RouterModule],
})

export class AuthRoutingModule {

}