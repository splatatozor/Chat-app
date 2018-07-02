import { Component, OnInit, OnDestroy } from "@angular/core";
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
  protected timeout: any;

  constructor(
    private webSocket: WebSocketService,
    private discussion: DiscussionService
  ) {
    if (this.discussion.hasNewMessage === true) {
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this.timeout = setTimeout(this.refreshMessages(), 1000);
  }

  private refreshMessages() {
    this.messages = this.discussion.getDiscussion(
      this.discussion.activeDiscussion
    );
    console.log(this.messages);
  }

  ngOnDestroy() {
    console.log("exited");
    clearTimeout(this.timeout);
  }

  protected sendMessage() {
    this.webSocket.sendDiscussionMessage({
      user1: localStorage.getItem("username"),
      user2: this.discussion.activeDiscussion,
      token: localStorage.getItem("token"),
      message: this.message
    });
  }
}
