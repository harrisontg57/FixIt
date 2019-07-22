import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserService } from './User Service/userService.component';
import { Router } from '@angular/router';
import { User } from './User Service/userService.component';

@Component({
    selector: "login",
    templateUrl: "../FixItComponents/login.component.html",
    styleUrls: ['../FixItComponents/login.component.css']
})

@Injectable()
export class LoginComponent{
    user : User; 

    constructor(private userService: UserService, private router: Router) { }

    submitUserInfo(){
        this.user = {
            id: undefined,
            firstName: undefined,
            lastName: undefined,
            email: undefined,
            username: String($('#inputUsername').val()),
            password: String($('#inputPassword').val())
        }
        this.userService.loginUser(this.user);
    }
}