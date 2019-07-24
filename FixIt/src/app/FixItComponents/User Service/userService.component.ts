import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService{

    user: User
    constructor(private http: HttpClient, private router: Router){ }

    url = "http://localhost:5000/users";
    users = void[];

    //Function that retrieves all users from localhost
    getAllUsers(callback){
        $.ajax({
            url: this.url,
            type:"GET",
            success: callback,
            dataType:"json"
        });
    }

    //Function that logs in user
    loginUser(user:User, callback){
        console.log("logging in user function")
        //variable that determines if user was found
        var ans = "";
        
        //retrieves all users from localhost to search for user
        this.getAllUsers(function(data){
            //assigns data from localhost to array
            this.users = data;
            //loops through array in search of user
            for(var i = 0; i < this.users.length; i++){
                //checks if both username and password match
                if(this.users[i].username == user.username && this.users[i].password == user.password){
                    console.log("Successful Login");
                    ans = "found";
                    //callback to login component
                    callback(ans);
                    //ends function if found
                    return ;
                }
            }
            //if user was not found
            callback(ans);
        });  
        
    }

    //function that checks if user is already registered
    registerUser(user:User, callback){
        console.log("register user function");
        //variable that checks if username is already taken
        var ans = "";
        //errors array
        var errors = [];
        //retrieves all users from localhost to search for username
        this.getAllUsers(function(data){
            //assigns data to array
            this.users = data;
            //loops through array in search of username
            for(var i = 0; i < this.users.length; i++){
                //checks if username already exists
                if(this.users[i].username == user.username){
                    //pushes this (probably dont need it)
                    errors.push("Username is already taken");
                    ans = "found";
                    //console.log(this.users[i].username)
                    //callback to createUser component
                    callback(ans);
                    //ends function if found
                    return;
                }
            }
            
            console.log("Account registered");
            //if username not taken call postUser() to post info
            this.postUser(user);
            //if username was not taken
            callback(ans);
        });


    }

    //posts user to localhost/database
    postUser(user: User){
        this.http.post(`${this.url}`, user,{responseType: 'text'}).subscribe(
            res=>{
                console.log("the result", res);
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
