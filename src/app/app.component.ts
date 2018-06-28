import { Component, OnInit } from '@angular/core';
import {ToggleService} from './toggle.service';
import {ApiService} from "./api.service";
import {User} from "./user";
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const SOCKET_URL = 'ws://127.0.0.1:3000/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public toggle: ToggleService, private api: ApiService) {}

  ngOnInit() {
    let token = localStorage.getItem("token")
      if (token !== null) {
        this.toggle.isLog = true;
        this.toggle.token = token
      }
  }
}
