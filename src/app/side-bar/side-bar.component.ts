import { Component, OnInit } from "@angular/core";
import { ToggleService } from "../toggle.service";
import {ApiService} from "../api.service";
import {User} from "../user";
declare var require: any;

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {

  public user: User
  constructor(public toggle: ToggleService, private api: ApiService) {}

  ngOnInit() {}

  protected logOut() {
    let token = localStorage.getItem("token")
      if (token !== null) {
          this.api.logOut(token).subscribe(res => {
              this.toggle.isLog = false;
              localStorage.removeItem("token")
          })
      }
  }

  protected logIn() {
    this.toggle.isLog = true;
    console.log("Connect");

    const Filter = require("bad-words"),
      filter = new Filter();
    filter.addWords(["merde", "pute", "trou"]);
    console.log(filter.clean("Dont be an ash0le espece de pute"));
  }

  protected signIn() {
    this.goTo(4);
  }

  protected goTo(value: Number) {
    if (value === 1) {
      this.toggle.isMessage = true;
      this.toggle.isChat = false;
      this.toggle.isProfile = false;
      this.toggle.isSignIn = false;
      this.toggle.isLogin = false;
    }
    if (value === 2) {
      this.toggle.isMessage = false;
      this.toggle.isChat = true;
      this.toggle.isProfile = false;
      this.toggle.isSignIn = false;
      this.toggle.isLogin = false;
    }
    if (value === 3) {
      this.toggle.isMessage = false;
      this.toggle.isChat = false;
      this.toggle.isProfile = true;
      this.toggle.isSignIn = false;
      this.toggle.isLogin = false;
    }
    if (value === 4) {
      this.toggle.isMessage = false;
      this.toggle.isChat = false;
      this.toggle.isProfile = false;
      this.toggle.isSignIn = true;
      this.toggle.isLogin = false;
    }
    if (value === 5) {
      this.toggle.isMessage = false;
      this.toggle.isChat = false;
      this.toggle.isProfile = false;
      this.toggle.isSignIn = false;
      this.toggle.isLogin = true;
    }
    return;
  }
}
