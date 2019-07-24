import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: "chat",
    templateUrl: "../FixItComponents/chat.component.html",
    styleUrls: ['../FixItComponents/chat.component.css']
})

@Injectable()
export class ChatComponent{

    constructor(private router: Router) { }

    username: string;
    chat: string;
    message: string;
    newTime: number;

    one: number = new Date().setTime(1563978200000);
    two: number = new Date().setTime(1563978000000);
    three: number = new Date().setTime(1563977800000);
    four: number = new Date().setTime(1563977100000);
    user4: string = "Coolguy420";
    user3: string = "66lmaoRekt66";
    user2: string = "oldMan43";

    submitUserChat(){
            this.username = String($('#chatUser').val());
            this.chat = String($('#comment').val());
            this.newTime = new Date().getTime();
            this.message = " " + this.username +"::   " + this.chat;

    }
}