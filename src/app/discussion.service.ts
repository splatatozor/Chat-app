import { Injectable, Output, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DiscussionService {
  private discussions = {};
  public activeDiscussion = "";

  @Output() change: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public getDiscussion(user: string) {
    return this.discussions[user];
  }

  public setDiscussion(user: string, messages: any) {
    this.discussions[user] = messages;
    this.change.emit(user)
  }
}
