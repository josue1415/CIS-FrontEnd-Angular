import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) { }

  public languaje: EventEmitter<any> = new EventEmitter<any>();

  private _navItemSource = new BehaviorSubject<string>('en');
  private _tokenPublico = new BehaviorSubject<string>('');

  getPublicToken(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = { headers: headers };

    return this.http.post(`${this.URL}/login`, {
      "email": "melmerantonio@gmail.com",
      "password": "AdminCIS_2021"
    }, options)
  }

  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();

  // service command
  changeNav(number: string) {
    this._navItemSource.next(number);
  }

  setToken(token: string) {
    localStorage.setItem('loggedTkn', token);
  }
}
