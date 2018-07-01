import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToggleService } from "../toggle.service";
import { WebSocketService } from "../web-socket.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  protected username: String;
  protected password: String;
  protected errorDeleted: boolean = false;
  protected errorCredentials: boolean = false;
  protected errorUnexpected: boolean = false;
  constructor(private api: ApiService, private toggle: ToggleService, private webSocket: WebSocketService) {}

  ngOnInit() {}

  protected login() {
    this.errorCredentials = false;
    this.errorUnexpected = false;
    this.errorDeleted = false;
    this.api.login(this.username, this.password).subscribe(res => {
      if (res["success"] === false && res["errCode"] === "deleted") {
        this.errorDeleted = true;
      }
      if (res["success"] === false && res["errCode"] === "credentials") {
        this.errorCredentials = true;
      }
      if (res["success"] === false && res["errCode"] === "unexpected") {
        this.errorUnexpected = true;
      }
      if (res["success"] === true) {
        localStorage.setItem("token", res["token"]);
        localStorage.setItem("username", this.username as string);
        this.toggle.isLogin = false;
        this.toggle.isChat = true;
        this.toggle.isLog = true;
        this.toggle.token = res["token"];

        //this.webSocket.initSocket();
        this.webSocket.connect(this.username, res["token"]);
      }
    });
  }
}
