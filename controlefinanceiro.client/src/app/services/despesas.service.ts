import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { despesas } from '../models/despesas';
import { response } from '../models/response';


@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  private apiUrl = `${environment.ApiUrl}/Despesas`

  constructor(private http:HttpClient) { }

  GetDespesas() : Observable<despesas[]>
  {
      return this.http.get<despesas[]>(this.apiUrl)
  }



}
