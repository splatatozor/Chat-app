import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  protected searchValue: String;
  protected searchIndex: number = 0;
  protected resIndex: number = 0;
  protected errorSearch: Boolean = false;
  protected users:any;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  protected searchUser(e) {
    console.log(e);
    this.errorSearch = false;
    if (this.searchValue === "") {
      this.errorSearch = false
      return;
    }
    this.searchIndex++;
    console.log(this.searchValue, this.searchIndex);
    this.api.getUser(this.searchValue, this.searchIndex).subscribe(res => {
      console.log(res);
      if (res["success"] === false && res["errCode"] === "request") {
        this.errorSearch = true;
        console.log("err : " + res["errCode"])
      }
      if (res["success"] === true) {
        console.log(res);
        if(res["id"] > this.resIndex)
          this.users = res["users"]
      }
    });
  }
}
