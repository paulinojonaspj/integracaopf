import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  constructor(private http: HttpClient) { }

  postDados(url: string, dados: any): Observable<any> {
    return this.http.post<any>(url, dados);
  }
}
