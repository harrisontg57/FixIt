import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../login.component'

@Injectable()
export class UserService{

    user: User
    //@HttpHandler()
    constructor(private http: HttpClient){ }

    // register(user: User, callback){
    //     this.http.post('http://localhost:3000/users', user).subscribe(res=>{
    //         callback(res)
    //     })
    // }

    login(user: LoginUser, callback){
        this.http.post('/api/v1/users/login', user).subscribe(res=>{
            console.log(res)
            callback(res)
        },
        err => {
            callback(undefined)
        })
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

// export class LoginUser{
//     username: string
//     password: string
// }