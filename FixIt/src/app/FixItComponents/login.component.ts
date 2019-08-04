import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { UserService } from './User Service/userService.component';
import { Router } from '@angular/router';
import { User } from './User Service/userService.component';
import { NavBarComponent } from '../Nav Bar/navBar.component';

@Component({
    selector: "login",
    templateUrl: "../FixItComponents/login.component.html",
    styleUrls: ['../FixItComponents/login.component.css']
})

@Injectable()
export class LoginComponent{
    user : User; 

    constructor(private userService: UserService, private router: Router) { }

    returnUser(){
        return this.user;
    }
    //Hands input info off to userService and recieves a callback determining if a match was found.
    submitUserInfo(){
        this.user = {
            id: undefined,
            firstname: undefined,
            lastname: undefined,
            email: undefined,
            username: String($('#inputUsername').val()),
            password: String($('#inputPassword').val()),
            loggedIn: "not logged in"
        }
        this.userService.loginUser(this.user, function(ans, usr){
            var answer = ans;
            var tempUsr = usr;
            if(String(answer) == "found"){
                document.getElementById('status-info').innerHTML = "logged in"
                document.getElementById('user-info').innerHTML = tempUsr
                alert("Login Successful!");
                //window.location.href = "http://localhost:4200/fixit";
            }
            if(String(answer) != "found"){
                alert("Username or Password was incorrect");
            }
        });
    }
}