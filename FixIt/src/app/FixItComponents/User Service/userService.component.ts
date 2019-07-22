import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService{

    user: User
    constructor(private http: HttpClient, private router: Router){ }

    url = "http://localhost:3000";

    getUsers(){
        return this.http.get(`${this.url}/users`);
    }

    loginUser(User){
        this.getUsers();
        this.http.post(`${this.url}/users`, User).subscribe(
            res=>{
                console.log("Successful Login");
                console.log("account:", res);
                this.router.navigateByUrl('/users');

            },
            err=>{
                console.log("Error occured: ", err);
            }
        )
    }

    registerUser(User){
        this.getUsers();
        this.http.post(`${this.url}/users`, User).subscribe(
            res=>{
                console.log(res);
                console.log("Account registered")
                this.router.navigateByUrl('/users');
            },
            err=>{
                console.log('Error occured:' , err);
            }
        );
    }
}

export class User{
    id: number
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
}