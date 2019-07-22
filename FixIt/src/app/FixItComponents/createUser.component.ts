import { Component, Injectable } from '@angular/core';
import { User, UserService } from './User Service/userService.component';
import { Router } from '@angular/router';

@Component({
    selector: 'create-user',
    templateUrl: '../FixItComponents/createUser.component.html',
    styleUrls: ['../FixItComponents/createUser.component.css']
})

@Injectable()
export class CreateUserComponent{
    user : User; 

    constructor(private userService: UserService, private router: Router) { }
    
    submitNewUser(){
        this.user = {
            id: undefined,
            firstName: String($('#inputFirstname').val()),
            lastName: String($('#inputLastname').val()),
            email: String($('#inputEmail').val()),
            username: String($('#inputUsername').val()),
            password: String($('#inputPassword').val())
        }

        this.userService.registerUser(this.user);

    }
}   