import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  public readonly url: string = "http://127.0.0.1:3000/";
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

  public getLanguages(): Observable<Object> {
    return this.http.get(this.url + "language");
  }

  public getCountries(): Observable<Object> {
    return this.http.get(this.url + "language");
  }

  public changeProfilePicture(avatar, token): Observable<Object> {
    const uploadData = new FormData();
    uploadData.append("img", avatar, avatar.name);
    uploadData.append("token", token);
    return this.http.put(this.url + "user/avatar", uploadData);
  }
}
