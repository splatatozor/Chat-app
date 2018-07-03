import { Component, OnInit } from "@angular/core";
import { ToggleService } from "../toggle.service";
import { ApiService } from "../api.service";
import { User } from "../user";
import { BadWordsService } from "../bad-words.service";
import { WebSocketService } from "../web-socket.service";
import { ProfileComponent } from "../profile/profile.component";
import { DiscussionService } from "../discussion.service"
declare var require: any;

@Component({
  providers: [ProfileComponent],
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  protected friends: any = [];
  private username: string;

  constructor(
    public toggle: ToggleService,
    private api: ApiService,
    private badWords: BadWordsService,
    private webSocket: WebSocketService,
    private profileComponent: ProfileComponent,
    private discussion: DiscussionService
  ) {
    this.username = localStorage.getItem("username");
    webSocket.onConnectedFriends().subscribe(res => {
        let friendIndex = this.friends.indexOf(res);
        if(friendIndex >= 0) {
            this.friends[friendIndex].status = res.status;
        }
        else {
            this.friends.push(res);
        }
    });
  }

  ngOnInit() {}

  protected logOut() {
    let token = localStorage.getItem("token");
    if (token !== null) {
      this.api.logOut(token).subscribe(res => {
        this.toggle.isLog = false;
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        this.toggle.closeAll();
        this.toggle.isLogin = true;
        this.discussion.clear();
        this.friends = [];
        this.webSocket.close();
      });
    }
  }

  protected logIn() {
    this.toggle.isLog = true;
    this.toggle.isProfile = true;
    console.log("Connect");
  }

  protected signIn() {
    this.goTo(4);
  }

  protected goTo(value: Number) {
    if (this.webSocket.isInit) {
      this.friends = [];
      this.webSocket.getFriends();
    }
    this.toggle.isProfile = false;
    this.toggle.isChat = false;
    this.toggle.isUserList = false;
    this.toggle.isSignIn = false;
    this.toggle.isLogin = false;
    //this.delay(3000);
    if (value === 1) {
      this.toggle.futureUsername = "";
      setTimeout(() => {
        this.toggle.isProfile = true;
      }, 100);
      console.log("yop");
    }
    if (value === 2) {
      this.toggle.isChat = true;
      this.badWords.checkbadWords("nique ta m");
    }
    if (value === 3) {
      this.toggle.isUserList = true;
    }
    if (value === 4) {
      this.toggle.isSignIn = true;
    }
    if (value === 5) {
      this.toggle.isLogin = true;
    }
    return;
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }
}
