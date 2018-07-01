import { Component, OnInit } from '@angular/core';
import { WebSocketService } from "../web-socket.service"
import { DiscussionService } from "../discussion.service"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  private messages = [];
  protected message: string;

  constructor(private webSocket: WebSocketService, private discussion: DiscussionService) { }

  ngOnInit() {
    this.messages = this.discussion.getDiscussion(this.discussion.activeDiscussion);
    console.log(this.messages);
  }

  protected sendMessage(){
      this.webSocket.sendDiscussionMessage(
          {
              user1: localStorage.getItem('username'),
              user2: this.discussion.activeDiscussion,
              token: localStorage.getItem('token'),
              message: this.message
          }
      );
  }
}
