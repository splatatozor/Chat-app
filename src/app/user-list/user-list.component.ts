import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  protected searchValue: String;
  protected letterCount: number = 0;
  protected errorSearch: Boolean = false;
  protected users:any;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  protected searchUser(e) {
    this.errorSearch = false;
    if (this.searchValue === "") {
      this.errorSearch = false
      return;
    }
    this.letterCount = this.searchValue.length;
    console.log(this.searchValue, this.letterCount);
    this.api.getUser(this.searchValue, this.letterCount).subscribe(res => {
      if (res["success"] === false && res["errCode"] === "request") {
        this.errorSearch = true;
      }
      if (res["success"] === true) {
        console.log(res);
        this.users = res
      }
    });
  }
}
