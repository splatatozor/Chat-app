import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public isLog: Boolean = false;
  public isChat: Boolean = true;
  public isProfile: Boolean = false;
  public isEditProfile: Boolean = false;
  public isSignIn: Boolean = false;
  public isLogin: Boolean = false;

  public token : string = "";

  constructor() { }
}
