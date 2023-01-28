import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilesServicesService {

  private readonly URL = 'https://dev.elsalvador-cis.com/api/public';

  constructor(private http: HttpClient) { }

  getOnlytwentyBecados(): Observable<any> {
    return this.http.get(`${this.URL}/getOnlytwentyBecados`)
  }
}
