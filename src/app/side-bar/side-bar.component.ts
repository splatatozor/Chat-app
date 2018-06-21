import { Component, OnInit } from '@angular/core';
import { ToggleService } from '../toggle.service';
declare var require: any;


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(public toggle: ToggleService) { }

  ngOnInit() {
  }

  protected logOut() {
    this.toggle.isLog = false;
    console.log('Disconnect');
  }

  protected logIn() {
    this.toggle.isLog = true;
    console.log('Connect');

      const Filter = require('bad-words'),
          filter = new Filter();
      filter.addWords(['merde', 'pute', 'trou']);
      console.log(filter.clean('Dont be an ash0le espece de pute'));
  }

  protected goTo(value: Number) {
    if (value === 1) {
      this.toggle.isMessage = true;
      this.toggle.isChat = false;
      this.toggle.isProfile = false;
    }
    if (value === 2) {
      this.toggle.isMessage = false;
      this.toggle.isChat = true;
      this.toggle.isProfile = false;
    }
    if (value === 3) {
      this.toggle.isMessage = false;
      this.toggle.isChat = false;
      this.toggle.isProfile = true;
    }
    return;
  }



}
