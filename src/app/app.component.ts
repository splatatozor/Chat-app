import { Component } from '@angular/core';
import {ToggleService} from './toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public toggle: ToggleService) {}
}
