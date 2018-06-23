import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToggleService } from "../toggle.service";
import { User } from "../user";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  protected username: String;
  protected fullName: String;
  protected birthDate: String;
  protected country: Number;
  protected mailAddress: String;

  constructor(private api: ApiService, private toggle: ToggleService) {}

  ngOnInit() {
    this.getMet();
  }

  protected sendEmail(): void {
    window.open("mailto:" + this.mailAddress);
  }

  protected getMet(): void {
    this.api.getMe(this.toggle.token).subscribe(
      res => {
        console.log(res);
        this.username = res["username"];
        this.fullName = res["fullName"];
        this.birthDate = res["birthDate"];
        this.country = res["country"];
        this.mailAddress = res["mailAddress"];
      },
      error => {
        console.log(error);
      }
    );
  }
}
