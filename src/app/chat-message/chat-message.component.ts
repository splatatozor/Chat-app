import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { ApiService } from "../api.service"
import { BadWordsService } from "../bad-words.service"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() private message: any;
  private isMe = false;

  constructor(private api: ApiService, private badWords: BadWordsService) { }

  ngOnInit() {
    var tmpSplit = this.message.date.split('T');
    var tmpTime = tmpSplit[1].split('.')[0];
    this.message.date = tmpSplit[0] + ' ' + tmpTime;
    if(this.message.user === localStorage.getItem('username')){
      this.isMe = true;
    }
    this.message.message = this.badWords.checkbadWords(this.message.message);
  }

  protected getAvatar(username) {
      return this.api.url +
          "user/avatar/" +
          username +
          "?time=" +
          Date.now();
  }

}
