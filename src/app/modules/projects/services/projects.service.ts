import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URL}/proyectos-sociales?idioma=es`, options)
  }

  getProjectById(id: String): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URL}/proyectos-sociales/${id}?idioma=es`, options)
  }
}
