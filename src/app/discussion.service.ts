import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  private discussions = {};
  public activeDiscussion = '';

  constructor() { }

  public getDiscussion(user: string) {
    return this.discussions[user];
  }

  public setDiscussion(user: string, messages: any) {
    this.discussions[user] = messages;
  }
}
