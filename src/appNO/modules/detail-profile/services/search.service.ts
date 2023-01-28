import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api/public';
  private readonly URL2 = 'https://dev.elsalvador-cis.com/api';

  constructor(private http: HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 3|yQVzfdbTwVkfBqPbk12uZxK8fG8KT5ziotUTYmG1'
  });
  private options = { headers: this.headers };

  searchDataBecados$(): Observable<any> {
    return this.http.get(`${this.URL}/getBecados`);
  }

  searchDataTestimonies$(): Observable<any> {
    return this.http.get(`${this.URL2}/testimonios?idioma=es`, this.options);
  }

  searchDataProjects$(): Observable<any> {

    return this.http.get(`${this.URL2}/proyectos-sociales?idioma=es`, this.options);
  }
  // Get Name of all communities
  getCommunities$(): Observable<any> {
    return this.http.get(`${this.URL}/getCommunities`);
  }


}
