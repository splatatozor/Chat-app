import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  public isLog: Boolean = false;
  public isChat: Boolean = true;
  public isMessage: Boolean = false;
  public isProfile: Boolean = false;

  constructor() { }
}
