import { CreateUserDto } from './../../model/createUserDto';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDto } from 'src/app/model/userDto';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  acutalDate: Date = new Date();
  userFormular: FormGroup;
  inputUserNamePlaceHolder: string = 'Wpisz tutaj imię';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.userFormular = new FormGroup({
    inputUserName: new FormControl(null, Validators.required),
    inputUserLogin: new FormControl(null, Validators.required),
    inputPassword: new FormControl(null, Validators.required),
    inputMatchingPassword: new FormControl(null, Validators.required),
    inputEmail: new FormControl(null, Validators.required),
    inputaccountNonExpired: new FormControl(false),
    inputaccountNonLocked: new FormControl(false),
    credentialsNonExpired: new FormControl(false),
    enabled: new FormControl(true),

  });
}

  submitUserForm(): void {
    const inputUserName = this.userFormular.value.inputUserName;
 

    const createUserDto: CreateUserDto = {
      username: this.userFormular.value.inputUserName,
      login: this.userFormular.value.inputUserLogin,
      password:this.userFormular.value.inputPassword,
      matchingPassword: this.userFormular.value.inputMatchingPassword,
      email: this.userFormular.value.inputEmail,
      // authRoles: ['ADMIN'],
      accountNonExpired: !this.userFormular.value.inputaccountNonExpired,
      accountNonLocked: !this.userFormular.value. inputaccountNonLocked,
      credentialsNonExpired: !this.userFormular.value.credentialsNonExpired,
      enabled: this.userFormular.value.enabled,
    };
    console.log(this.userFormular);
    console.log('inputUsername-> ' + inputUserName);
    this.userService.createUser(createUserDto).subscribe((create: UserDto)=>{
      console.log(
      'subskirber'
      )
      console.log(create);
    });
  }

}
