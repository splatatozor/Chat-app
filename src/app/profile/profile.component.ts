import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ToggleService } from "../toggle.service";

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
  protected avatar: String;
  protected errorSize: Boolean = false;
  protected errorType: Boolean = false;

  constructor(private api: ApiService, private toggle: ToggleService) {
    this.avatar = this.api.url + "user/avatar/" + this.username;
  }

  ngOnInit() {
    this.getMe();
  }

  protected sendEmail(): void {
    window.open("mailto:" + this.mailAddress);
  }

  protected getMe(): void {
    this.api.getMe(this.toggle.token).subscribe(
      res => {
        this.username = res["username"];
        this.fullName = res["fullName"];
        this.birthDate = res["birthDate"];
        this.country = res["country"];
        this.mailAddress = res["mailAddress"];
        this.avatar =
          this.api.url +
          "user/avatar/" +
          res["username"] +
          "?time=" +
          Date.now();
      },
      error => {
        console.log(error);
      }
    );
  }

  private uploadImg(avatarToUpload) {
    this.errorSize = false;
    this.errorType = false;
    this.api.changeProfilePicture(avatarToUpload, this.toggle.token).subscribe(
      res => {
        if (res["success"] === false && res["errCode"] === "size") {
          this.errorSize = true;
        }
        if (res["success"] === false && res["errCode"] === "type") {
          this.errorType = true;
        }
        if (res["success"] === true) {
          this.getMe();
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  protected changeListener($event): void {
    let avatarToUpload = $event.target.files[0];
    this.uploadImg(avatarToUpload);
  }

  protected getAvatar(): String {
    return this.avatar;
  }

  protected getBirthdate() {
    if (this.birthDate == undefined) {
      return;
    }
    return this.birthDate.slice(0, 10);
  }

  protected deleteAccount() {
    this.api.deleteAccount(this.toggle.token).subscribe(res => {
      console.log("ok");
      this.toggle.isLog = false;
      this.toggle.isProfile = false;
      this.toggle.isLogin = true;
      localStorage.removeItem("token");
    });
  }
}
