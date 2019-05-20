import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8080";

  constructor(
    private http: Http
  ) { }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).pipe(map(res => res.json()));
  }
}
