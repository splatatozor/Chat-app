import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { ApiService } from "../api.service";
import { ToggleService } from "../toggle.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  protected username: String;
  protected password: String;
  protected fullName: String;
  protected birthDate: Date;
  protected country: Number;
  protected language: Number;
  protected mailAddress: String;
  protected languages: any;
  protected countries: any;
  constructor(private api: ApiService, private toggle: ToggleService) {}

  ngOnInit() {
    this.getCountries();
    this.getLanguages();
  }

  protected addUser() {
    const birthDateTimeStamp: Number = new Date(this.birthDate).getTime();
    this.api
      .addUser(
        this.username,
        this.password,
        this.fullName,
        birthDateTimeStamp,
        this.country,
        this.language,
        this.mailAddress
      )
      .subscribe(res => {
        console.log(res);
        this.toggle.isSignIn = false;
        this.toggle.isLogin = true;
      });
  }

  private getLanguages() {
    this.api.getLanguages().subscribe(
      res => {
        this.languages = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  private getCountries() {
    this.api.getCountries().subscribe(
      res => {
        this.countries = res;
      },
      error => {
        console.log(error);
      }
    );
  }
}
