import { UserDto } from './../model/userDto';
import { CreateUserDto } from './../model/createUserDto';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly WHITE_LIST_APP_ADDRESS: string = 'http://localhost:8080';
  private readonly USER_URI: string = '/user';
  private readonly TEST: string = '/test';
  private readonly CREATEUSER_URI: string = '/create';
  private readonly FIND_ALL_USERS_URI = '/findall';
  private readonly DELETE_USERS_URI = '/delete';

  private userList$ = new BehaviorSubject<Array<UserDto>>([]);

  constructor(private http: HttpClient) {

  }

  public serachUser(): Observable<Greetings> {
    const result: Observable<Greetings> = this.http.get<Greetings>(this.WHITE_LIST_APP_ADDRESS
      + this.USER_URI
      + this.TEST);

    return result;
  }

  public createUser(createUser: CreateUserDto): Observable<UserDto> {
    const result = this.http.post<UserDto>(this.WHITE_LIST_APP_ADDRESS
      + this.USER_URI
      + this.CREATEUSER_URI, createUser);

    console.log(result);

    return result;

  }

  public findAllUsers(): Observable<Array<UserDto>> {
    const result = this.http.get<Array<UserDto>>(this.WHITE_LIST_APP_ADDRESS
      + this.USER_URI
      + this.FIND_ALL_USERS_URI);

    result.subscribe((userDtoList: Array<UserDto>) => {
      this.userList$.next(userDtoList);
    })

    return result;
  }

  public delete(id: string): Observable<UserDto> {
    const idParam = new HttpParams().set('id', id);
    return this.http.delete<UserDto>(this.WHITE_LIST_APP_ADDRESS
      + this.USER_URI
      + this.DELETE_USERS_URI, { params: idParam });
  }

}

export interface Greetings {
  id?: string;
  content?: string;
}

