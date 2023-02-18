import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {
  private readonly URL = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) {}
  
  private storageToken: any = localStorage.getItem('loggedTkn');

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.storageToken
  });

  private options = { headers: this.headers };

  getTestimonies(): Observable<any> {
    return this.http.get(`${this.URL}/testimonios?idioma=es`, this.options)
  }

  getTestimoniesById(id: any, lang: String): Observable<any> {
    return this.http.get(`${this.URL}/testimonios/${id}?idioma=${lang}`, this.options)
  }
}
