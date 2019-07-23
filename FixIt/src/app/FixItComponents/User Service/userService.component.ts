import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService{

    User: User
    constructor(private http: HttpClient, private router: Router){ }

    url = "http://localhost:5000/users";
    

    getUsers(){
        return this.http.get(`${this.url}`).subscribe(
            res=>{
                console.log(res);
            },
            err=>{
                console.log(err);
            }
        );
    }

    loginUser(User:User){
        this.getUsers();
        //console.log(this.url);
        return this.http.post(`${this.url}`, User).subscribe(
            res=>{
                console.log("Successful Login");
                console.log("account:", res);
            },
            err=>{
                console.log("Error occured: ", err);
            }
        )
    }

    registerUser(User:User){
        console.log("register user function");

        this.getUsers();
        return this.http.post(`${this.url}`, User,{responseType: 'text'}).subscribe(
            res=>{
                console.log("the result", res);
                console.log("Account registered")
            },
            err=>{
                console.log('Error occured:' , err);
            }
        );
    }
}

export class User{
    id: number
    firstname: string
    lastname: string
    email: string
    username: string
    password: string
}
