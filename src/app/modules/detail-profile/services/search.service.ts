import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = 'https://elsalvador-cis.com/api/public';

  constructor(private http: HttpClient) { }

  searchData$(): Observable<any> {
    return this.http.get(`${this.URL}/getBecados`);
  }

  // Get Name of all communities
  getCommunities$(): Observable<any> {
    return this.http.get(`${this.URL}/getCommunities`);
  }

 
}
