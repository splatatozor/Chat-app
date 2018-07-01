import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { ApiService } from "../api.service";
import { ToggleService } from "../toggle.service"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent implements OnInit {

  @Input() private friend: any;
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
      this.toggle.futureUsername = this.friend.username;
      this.toggle.friendProfile = true;
      this.toggle.isChat = false;
      this.toggle.isUserList = false;
      this.toggle.isSignIn = false;
      this.toggle.isLogin = false;
      this.toggle.isProfile = false;
      setTimeout(() => {this.toggle.isProfile = true;}, 100);
  }

}
