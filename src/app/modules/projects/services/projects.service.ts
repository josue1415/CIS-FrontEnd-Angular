import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 4|ktXNPCwAbTbLXeaqF7tQKdBAJ46EomY0NehcDQwN'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URL}/proyectos-sociales?idioma=es`, options)
    .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }

  getProjectById(id: String, lang: String): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 4|ktXNPCwAbTbLXeaqF7tQKdBAJ46EomY0NehcDQwN'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URL}/proyectos-sociales/${id}?idioma=${lang}`, options)
    .pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
