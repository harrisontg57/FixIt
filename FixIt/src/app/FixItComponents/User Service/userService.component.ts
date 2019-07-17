import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{

    user: User
    constructor(private http: HttpClient){ }

    register(user: User, callback){
        this.http.post('http://localhost:3000/users', user).subscribe(res=>{
            callback(res)
        })
    }

    login(user: User, callback){
        this.http.post('http://localhost:3000/users', user).subscribe(res=>{
            console.log(res)
            callback(res)
        },
        err => {
            callback(undefined)
        })
    }

}

export class User{
    firstName: string
    lastName: string
    id: number
    status: string
    email: string
    username: string
    password: string
}