import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  image: any
  constructor() {
  }

  ngOnInit() {}

  protected onChange(event) {
    console.log(event);

  }

  protected changeListener($event): void {
    this.getBase64($event.target.files[0
      ]);
  }

  private getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}
