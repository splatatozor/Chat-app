import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
declare var require: any;

@Injectable({
  providedIn: "root"
})
export class BadWordsService {
  private badWord: any = [];
  private filter: any;

  constructor(private http: HttpClient) {
    const Filter = require("bad-words");
    this.filter = new Filter({ emptyList: true });
    this.filter.removeWords("petite");
    this.getJSON();
  }

  public checkbadWords(text) {
    return this.filter.clean(text);
  }

  public getJSON() {
    this.http.get("./assets/badwords.json").subscribe(res => {
      this.badWord = res["words"];
      this.filter.addWords(this.badWord);
    });
  }
}
