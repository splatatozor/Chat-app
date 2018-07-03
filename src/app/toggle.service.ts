import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public isLog: Boolean = false;
  public isChat: Boolean = true;
  public isProfile: Boolean = false;
  public isUserList: Boolean = false;
  public isSignIn: Boolean = false;
  public isLogin: Boolean = false;

  public token : string = "";
  public futureUsername: string = "";
  public friendProfile: boolean = false;

  public closeAll(){
    this.isLog = false;
    this.isChat = false;
    this.isProfile = false;
    this.isUserList = false;
    this.isSignIn = false;
    this.isLogin = false;
  }

  constructor() { }
}
