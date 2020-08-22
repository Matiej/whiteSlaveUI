import { AuthService } from './service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'whiteSlaveUI';

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public isUserLogedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

}
