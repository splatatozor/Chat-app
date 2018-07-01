import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from "../api.service";
import { ToggleService } from "../toggle.service"

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() private user: any;
  @Input() private status: any;


  constructor(private api: ApiService, private toggle: ToggleService) { }

  ngOnInit() {
  }

  protected getAvatar(username) {
      return this.api.url +
          "user/avatar/" +
          username +
          "?time=" +
          Date.now();
  }

    protected goToProfile(){
        this.toggle.futureUsername = this.user.username;
        this.toggle.friendProfile = false;
        this.toggle.isChat = false;
        this.toggle.isUserList = false;
        this.toggle.isSignIn = false;
        this.toggle.isLogin = false;
        this.toggle.isProfile = false;
        setTimeout(() => {this.toggle.isProfile = true;}, 100);
    }

}
