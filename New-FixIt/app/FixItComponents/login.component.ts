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
    //answer = String;
    constructor(private userService: UserService, private router: Router) { }

    submitUserInfo(){
        this.user = {
            id: undefined,
            firstname: undefined,
            lastname: undefined,
            email: undefined,
            username: String($('#inputUsername').val()),
            password: String($('#inputPassword').val())
        }
        this.userService.loginUser(this.user, function(ans){
            var answer = ans;
            console.log(answer);
            if(String(answer) == "found"){
                alert("Login Successful!");
                window.location.href = "http://localhost:4200/fixit";
                //this.nav();
            }
            if(String(answer) != "found"){
                alert("Username or Password was incorrect");
            }
        });
    }
}