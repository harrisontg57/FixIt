import { Component } from '@angular/core';

@Component({
    selector: "login",
    templateUrl: "../FixItComponents/login.component.html",
    styleUrls: ['../FixItComponents/login.component.css']
})

export class LoginComponent{
    submitUserInfo(){
        var user = {
            Username: $("#inputEmail3").val(),
            Password: $("#inputPassword3").val()
        };
        console.log(user.Username);
        console.log(user.Password);
    }
}