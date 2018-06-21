import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

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
}
