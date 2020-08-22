import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        LoginComponent,
        LogoutComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule,
        
    ],
    
})
export class AuthModule {

}