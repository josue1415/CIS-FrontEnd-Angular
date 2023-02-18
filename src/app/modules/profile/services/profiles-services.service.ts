import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilesServicesService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api/public';
  private readonly URLToken = 'https://dev.elsalvador-cis.com/api';
  private storageToken: any = localStorage.getItem('loggedTkn');

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.storageToken
  });
  options = { headers: this.headers };

  getOnlytwentyBecados(): Observable<any> {
    return this.http.get(`${this.URL}/getOnlytwentyBecados`)
  }

  getSocialProjects(): Observable<any> {
    return this.http.get(`${this.URLToken}/proyectos-sociales?idioma=es`, this.options)
    .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  getTestimonies(): Observable<any> {
    return this.http.get(`${this.URLToken}/testimonios?idioma=es`, this.options)
    .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }


}
