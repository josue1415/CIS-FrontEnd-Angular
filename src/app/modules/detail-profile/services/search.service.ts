import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api/public';
  private readonly URL2 = 'https://dev.elsalvador-cis.com/api';
  private storageToken: any = localStorage.getItem('loggedTkn');

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.storageToken
  });
  private options = { headers: this.headers };

  searchDataBecados$(): Observable<any> {
    return this.http.get(`${this.URL}/getBecados`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  searchDataTestimonies$(): Observable<any> {
    return this.http.get(`${this.URL2}/testimonios?idioma=es`, this.options)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
    ;
  }

  searchDataProjects$(): Observable<any> {

    return this.http.get(`${this.URL2}/proyectos-sociales?idioma=es`, this.options)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
    ;
  }
  // Get Name of all communities
  getCommunities$(): Observable<any> {
    return this.http.get(`${this.URL}/getCommunities`)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
    ;
  }


}
