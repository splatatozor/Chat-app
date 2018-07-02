import { Component, OnInit } from "@angular/core";
import { WebSocketService } from "../web-socket.service";
import { DiscussionService } from "../discussion.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit {
  private messages = [];
  protected message: string;
  private scrollingElement: any;

  constructor(
    private webSocket: WebSocketService,
    private discussion: DiscussionService
  ) {
    this.scrollingElement = document.scrollingElement || document.body;
  }

  ngOnInit() {
    this.refreshMessages();
    this.discussion.change.subscribe(res => {
      if (res === this.discussion.activeDiscussion) {
        this.refreshMessages();
      }
    });
  }

  private refreshMessages() {
    this.messages = this.discussion.getDiscussion(
      this.discussion.activeDiscussion
    );
  }

  protected sendMessage() {
    this.webSocket.sendDiscussionMessage({
      user1: localStorage.getItem("username"),
      user2: this.discussion.activeDiscussion,
      token: localStorage.getItem("token"),
      message: this.message
    });
    this.message = "";
  }
}
