import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Chat, ChatService } from './ChatService/chat-service.service';


@Component({
    selector: "chat",
    templateUrl: "../FixItComponents/chat.component.html",
    styleUrls: ['../FixItComponents/chat.component.css']
})

@Injectable()
export class ChatComponent implements OnInit{

    constructor(private chatService: ChatService, private router: Router) { }
    dataRefresher: any;

    ngOnInit() {
        this.loadChats();
        this.refreshData();
    }

    chat: Chat;
    chats: Chat[] = [];

    //Loads chats from backend
    loadChats() {
      
      this.chatService.getChatHis(function(ans){
        //console.log("works?", JSON.parse(ans)[0]);
        var ch = JSON.parse(ans);
        document.getElementById('chts').innerHTML = "";
        //console.log("length", ch.length)
        for (var i = 0; i < ch.length - 1; i++){
            //console.log(ch[i]);
            var hodl = document.getElementById('chts').innerHTML;
            var d = new Date(Number(ch[i].dtime));
            document.getElementById('chts').innerHTML = hodl + "<li class='list-group-item'>" +  d.toLocaleTimeString()  + " " + ch[i].username + " " + ch[i].message + '</li>';
        }
        document.getElementById('chts').innerHTML = hodl + document.getElementById('save').innerHTML 
      });
    }
    //Allows component to update every 3 seconds
    refreshData(){
        this.dataRefresher =
          setInterval(() => {
            console.log("refreshed chats"); 
            this.loadChats();
            //Passing the false flag would prevent page reset to 1 and hinder user interaction
          }, 3000);
          
    }

    //submits new chats
    submitUserChat(){
        this.chat = {
            username: String($('#chatUser').val()),
            message: String($('#comment').val()),
            date: new Date().getTime()
        }
        this.chatService.postChat(this.chat, function(ans){
            var answer = JSON.parse(ans);
            var hodl = document.getElementById('chts').innerHTML;
            document.getElementById('chts').innerHTML = hodl + "<li class='list-group-item'>" + (new Date()).toLocaleTimeString()  + " " + answer.username + " " + answer.message + '</li>';
            document.getElementById('save').innerHTML = "<li class='list-group-item'>" + (new Date()).toLocaleTimeString() + " " + answer.username + " " + answer.message + '</li>';
            console.log("works?", ans);
        });
     }
}