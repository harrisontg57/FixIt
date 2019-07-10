import { Component } from '@angular/core';

@Component({
    selector: "login",
    templateUrl: "../FixItComponents/login.component.html",
    styleUrls: ['../FixItComponents/login.component.css']
})

export class LoginComponent{
    submitUserInfo(){
        var user = {
            Username: $("#inputUsername").val(),
            Password: $("#inputPassword").val()
        };
        console.log(user.Username);
        console.log(user.Password);
    }
}