import { Component, OnInit } from '@angular/core';
//import * as io from 'socket.io-client';
import {io} from 'socket.io-client';

const SOCKET_ENDPOINT = 'http://localhost:3500';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ChatInboxComponent implements OnInit {

  socket: any;
  username: string | undefined;
  message: string | undefined;
  userError: boolean = false;
  userSuccess: boolean = false;
  chatBox: boolean = false;
  users: number = 0;
  emptyMessage: boolean = false;

  constructor() { }
  
  ngOnInit() {
    this.setupSocketConnection();
  }

  getChatBox() {
    this.chatBox = !this.chatBox
  }

  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast',(data: string) => {
      if(data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px'
        document.getElementById('message-list')?.appendChild(element);
      }
    })
  }

  enterUser() {
    if (this.username != '' && this.username != null && this.username != undefined) { 
      this.userSuccess = true;
      this.users += 1;
    }
    else {
      this.userSuccess = false;
    }
  }

  sendMessage() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    if (this.message == '' || this.message == null || this.message == undefined) {
      this.emptyMessage = true;
    }
    else if (this.username != '' && this.username != null && this.username != undefined) {
      this.userSuccess = false;
        var date = new Date();
        var dateString = date.toString().substring(4,25);
        element.innerHTML = this.username.fontcolor('blue') + ": " + this.message + " @ " + dateString.fontcolor('lightgray');
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '10px';
        
        document.getElementById('message-list')?.appendChild(element);
        this.userError = false;
        this.message = '';
        this.emptyMessage = false;
    } else {
       this.userError = true;
    }
  }

}
