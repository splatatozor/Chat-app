import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { ApiService } from "../api.service"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() private message: any;
  private isMe = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    if(this.message.user === localStorage.getItem('username')){
      this.isMe = true;
    }
  }

  protected getAvatar(username) {
      return this.api.url +
          "user/avatar/" +
          username +
          "?time=" +
          Date.now();
  }

}
