import { Component, Injectable } from '@angular/core';
import { User, UserService } from './User Service/userService.component';
import { Router } from '@angular/router';
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'create-user',
    templateUrl: '../FixItComponents/createUser.component.html',
    styleUrls: ['../FixItComponents/createUser.component.css']
})

@Injectable()
export class CreateUserComponent{
    user : User; 


    constructor(private userService: UserService, private router: Router) { }
    //Uses userService to determine is a username is already in use
    submitNewUser(){
        this.user = {
            id: undefined,
            firstname: String($('#inputFirstname').val()),
            lastname: String($('#inputLastname').val()),
            email: String($('#inputEmail').val()),
            username: String($('#inputUsername').val()),
            password: String($('#inputPassword').val()),
            loggedIn: "not logged in"
        }

        this.userService.registerUser(this.user, function(ans){
            var answer = ans;
            if(String(answer) == "found"){
                alert("Username is already taken");
            }else{
                alert("Account has been registered");
                //window.location.href = "http://localhost:4200/login"
            }
        });

    }
}   