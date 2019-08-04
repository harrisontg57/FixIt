import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class UserService{
    
    user: User
    resp: string
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
        var usr = "";
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
                    usr = this.users[i].username
                    //callback to login component
                    callback(ans, usr);
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
        var temp = "";
        //retrieves all users from localhost to search for username
        this.getAllUsers(function(data){
            //assigns data to array
            this.users = data;
            //loops through array in search of username
            for(var i = 0; i < this.users.length; i++){
                //checks if username already exists
                if(this.users[i].username == user.username){
                    temp = "found";
                    //callback to createUser component
                    callback(temp);
                    //ends function if found
                    return;
                }
            }
            console.log("Account registered");
            //if username not taken call postUser() to post info
            $.ajax({
                url: this.url,
                type: 'POST',
                //Was having trouble getting first and last names to show
                data: JSON.stringify(data = {
                    firstname: String(user.firstname),
                    lastname: String(user.lastname),
                    email: user.email,
                    username: user.username,
                    password: user.password,
                    loggedIn: user.loggedIn
                }),
                dataType: 'json',
                contentType: 'application/json'
            });
            temp = "not found";
            //if username was not taken
            callback(temp);
        });
    }        
}

export class User{
    id: number
    firstname: string
    lastname: string
    email: string
    username: string
    password: string
    loggedIn: string
}