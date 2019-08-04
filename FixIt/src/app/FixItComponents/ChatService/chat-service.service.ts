import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ChatService{

    chat: Chat;
    constructor(private http: HttpClient, private router: Router){ }

    url = "http://localhost:5000/chats";
    public chats: Chat[] = [];
    chatss: void[] = [];

  getChats(callback){
      $.ajax({
          url: this.url,
          type:"GET",
          success: callback,
          dataType:"json"
      });
  }
  //GET request to the backend
  getChatHis(callback){
    //console.log("calling");
    this.http.get(`${this.url}`, {responseType: 'text'}).subscribe(
      res=>{
          callback(res);
          //return String(res);
      },
      
      err=>{
          console.log("error ", err);
      }
  );
  }
  //POST request to the backend
  postChat(chat: Chat, callback){
      this.http.post(`${this.url}`, chat, {responseType: 'text'}).subscribe(
          res=>{
              console.log("Posted result ", res);
              callback(res);
          },
          
          err=>{
              console.log("error ", err);
          }
      );
  }
}

export class Chat{
    date: number;
    username: string;
    message: string;
    constructor(date:number, username:string, message:string){
      this.date = date;
      this.username = username;
      this.message = message;
    }
}
