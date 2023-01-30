import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {
  private readonly URL = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) { }

  getTestimonies(): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URL}/testimonios?idioma=es`, options)
  }

  getTestimoniesById(id: any, lang: String): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
    });
    let options = { headers: headers };
    return this.http.get(`${this.URL}/testimonios/${id}?idioma=${lang}`, options)
  }
}
