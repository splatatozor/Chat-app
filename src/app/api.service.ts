import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private readonly url: string = "http://127.0.0.1:3000/";
  constructor(private http: HttpClient) {}

  public addUser(
    username: String,
    password: String,
    fullName: String,
    birthDate: Number,
    country: Number,
    language: Number,
    mailAddress: String
  ): Observable<Object> {
    return this.http.post(this.url + "user/registration", {
      username: username,
      password: password,
      fullName: fullName,
      birthDate: birthDate,
      country: country,
      language: language,
      mailAddress: mailAddress
    });
  }

  public login(username: String, password: String): Observable<Object> {
    return this.http.post(this.url + "user/connection", {
      username: username,
      password: password
    });
  }

  public logOut(token: String) {
      return this.http.post(this.url + "user/disconnection", {
          token: token
      });
  }

  public getMe(token): Observable<Object> {
      return this.http.get(this.url + "user/me?token=" + token);
  }
}
