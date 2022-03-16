import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfScholarshipService {

  private readonly URL = 'http://127.0.0.1:8000/api/public';

  constructor(private http: HttpClient) { }

  searchDataById$(idBecado: any): Observable<any> {
    return this.http.get(`${this.URL}/getBecadosById/${idBecado}`);
  }
  
  getTraduccionesBecadosById$(idBecado: any): Observable<any> {
    return this.http.get(`${this.URL}/getTraduccionesBecadosById/${idBecado}`);
  }

  becadosSettings$(): Observable<any> {
    return this.http.get(`${this.URL}/getBecadosSettings`);
  }

  becadosFamily$(idBecado: any): Observable<any> {
    return this.http.get(`${this.URL}/getFamilyBecadosById/${idBecado}`);
  }

  becadosMaterialHouse$(idBecado: any): Observable<any> {
    return this.http.get(`${this.URL}/getMaterialCasaBecadosById/${idBecado}`);
  }
  becadosGastos$(idBecado: any): Observable<any> {
    return this.http.get(`${this.URL}/getGastosMensualesBecadosById/${idBecado}`);
  }

  becadosTransporte$(idBecado: any): Observable<any> {
    return this.http.get(`${this.URL}/getTransportBecadosById/${idBecado}`);
  }
}
