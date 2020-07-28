import { UserDto } from './../model/userDto';
import { CreateUserDto } from './../model/createUserDto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly USER_URI: string = '/user';
  private readonly TEST: string = '/test'
  private readonly CREATEUSER_URI: string = '/create'

  constructor(private http: HttpClient) {

  }

  public serachUser(): Observable<Greetings> {
    const result: Observable<Greetings> = this.http.get<Greetings>(this.WHITE_LIST_APP_ADDRESS
      + this.USER_URI
      + this.TEST);

    return result;
  }

  public createUser(createUser: CreateUserDto): Observable<UserDto> {
    console.log('service st');

    console.log(createUser);

    const result = this.http.post<UserDto>(this.WHITE_LIST_APP_ADDRESS
      + this.USER_URI
      + this.CREATEUSER_URI, createUser);

console.log(result);

    return result;

  }

}


export interface Greetings {
  id?: string;
  content?: string;
}

