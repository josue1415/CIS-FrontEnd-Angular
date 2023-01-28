import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesServicesService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api/public';
  private readonly URLToken = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) { }

  getOnlytwentyBecados(): Observable<any> {
    return this.http.get(`${this.URL}/getOnlytwentyBecados`)
  }

  getSocialProjects(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URLToken}/proyectos-sociales?idioma=es`, options)
  }

  getTestimonies(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URLToken}/testimonios?idioma=es`, options)
  }
}
