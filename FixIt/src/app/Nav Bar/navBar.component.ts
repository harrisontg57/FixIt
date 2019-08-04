import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../FixItComponents/login.component';
import { User } from '../FixItComponents/User Service/userService.component';

@Component({
    selector: 'nav-bar',
    templateUrl: '../Nav Bar/navBar.component.html',
    styleUrls: ['../Nav Bar/navBar.component.css']
})

export class NavBarComponent{
    user: User;

    constructor(private router: Router, private login: LoginComponent){}
    // this.user = this.login.returnUser();

    loggedIn(){
        console.log("loggedIn func")
        if(document.getElementById('status-info').innerHTML == "logged in"){
            console.log("user found, user logged in")
            return "logged"
        }
        else{
            console.log("not logged in")
            this.router.navigate(['/login'])
            alert("Must be logged in to add marker")
            return "not logged";
        }
    }
}