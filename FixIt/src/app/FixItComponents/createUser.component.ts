import { Component } from '@angular/core';

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
            Username: $("#inputEmail3").val(),
            Password: $("#inputPassword3").val()
        };
        console.log(newAcc.Username);
        console.log(newAcc.Password);
    }
}