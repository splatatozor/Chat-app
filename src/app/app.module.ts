import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { ChatComponent } from "./chat/chat.component";
import { ProfileComponent } from "./profile/profile.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {WebSocketService} from "./web-socket.service";
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    ChatComponent,
    ProfileComponent,
    SignInComponent,
    LoginComponent,
    UserListComponent,
    UserCardComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
