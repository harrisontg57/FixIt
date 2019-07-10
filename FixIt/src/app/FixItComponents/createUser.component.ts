import { Component } from '@angular/core';
import { userInfo } from 'os';

@Component({
    selector: 'create-user',
    templateUrl: '../FixItComponents/createUser.component.html',
    styleUrls: ['../FixItComponents/createUser.component.css']
})

export class CreateUserComponent{
    
    submitNewUser(){
        var ID = 0;
        ID++;
        var newAcc = {
            id: ID,
            Username: $("#inputUsername").val(),
            Password: $("#inputPassword").val()
        };
        if(newAcc.Password != $("#inputRePassword").val()){
            console.log("passwords dont match")
        }
        else{
            console.log("passwords match")
        }
        console.log(newAcc.Username);
        console.log(newAcc.Password);
    }
}