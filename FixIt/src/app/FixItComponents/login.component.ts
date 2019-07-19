import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserService } from './User Service/userService.component';
import { Router } from '@angular/router';


declare function checkCredentials(user): any;

@Component({
    selector: "login",
    templateUrl: "../FixItComponents/login.component.html",
    styleUrls: ['../FixItComponents/login.component.css']
})


@Injectable()
export class LoginComponent{
    user : LoginUser; 

    constructor(private userService: UserService, private router: Router) { }

    submitUserInfo(){
        checkCredentials(this.user);
        this.user = {
            username: String($('#inputUsername').val()),
            password: String($('#inputPassword').val())
        }
        console.log(this.user.username);
        console.log(this.user.password);

        // this.userService.login(this.user, (res)=>{
        //     this.router.navigate(["/"]);
        // })
        //console.log(this.user.password);
    }
}

export class LoginUser{
    username: string
    password: string
}