import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly USERNAME_ITEM_FOR_SESSION: string = 'username';

    constructor() { }

    authenticate(username: string, password: string): boolean {
        console.log('try to auth')
        console.log('u: ' + username + ' p:' + password)
        if(username === 'matiej' && password === 'test123') {
            sessionStorage.setItem(this.USERNAME_ITEM_FOR_SESSION, username)
            console.log('auth is coreccts ')
            return true;
        } else{
            return false;
        }
    }

    isUserLoggedIn(): boolean {
        let user = sessionStorage.getItem(this.USERNAME_ITEM_FOR_SESSION);
        console.log('is user logged => ' + (user != null));
        return user != null;
    }

    logout(): void {
        sessionStorage.removeItem(this.USERNAME_ITEM_FOR_SESSION);
    }

}