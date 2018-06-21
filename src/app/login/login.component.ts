import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {ToggleService} from "../toggle.service";
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  protected username: String;
  protected password: String;
  public user : User
  constructor(private api: ApiService, private toggle: ToggleService) { }

  ngOnInit() {
  }

  protected login() {
    this.api.login(this.username, this.password).subscribe(res => {
      console.log(res);
      localStorage.setItem("token", res["token"])
        this.toggle.isLogin = false;
        this.toggle.isChat = true;
        this.toggle.isLog = true
        // this.api.getMe(res["token"]).subscribe( res=> {
        //   this.user.username = res["username"]
        //   this.user.password = res["password"]
        //   this.user.fullName = res["fullName"]
        //   this.user.mailAddress = res["mailAddress"]
        // })
    })
  }
}