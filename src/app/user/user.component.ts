import { UserService, Greetings } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Demo';
  greeting: Greetings ={};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getData();
  }

  getAnother():void {
    this.getData();
  }

  private getData(): void {
    this.userService.serachUser().subscribe(data => {
      console.log(data);
      this.greeting = data;
    })
  }



}
