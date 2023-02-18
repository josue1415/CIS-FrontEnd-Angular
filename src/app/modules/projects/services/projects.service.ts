import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api';
  private storageToken: any = localStorage.getItem('loggedTkn');

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.storageToken
  });

  private options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get(`${this.URL}/proyectos-sociales?idioma=es`, this.options)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  getProjectById(id: String, lang: String): Observable<any> {
    return this.http.get(`${this.URL}/proyectos-sociales/${id}?idioma=${lang}`, this.options)
      .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
