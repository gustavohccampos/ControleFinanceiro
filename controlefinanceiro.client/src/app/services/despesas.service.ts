import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Despesas } from '../models/Despesas';



@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  private apiUrl = `${environment.ApiUrl}/Despesas`

  constructor(private http:HttpClient) { }

  GetDespesas() : Observable<Despesas[]>
  {
      return this.http.get<Despesas[]>(this.apiUrl)
  }

  GetDespesaId(id :number) : Observable<Despesas>
  {
      return this.http.get<Despesas>(`${this.apiUrl}/${id}`);
  }

  PostDespesa(despesa: Despesas) : Observable<Despesas[]> {
    return this.http.post<Despesas[]>(`${this.apiUrl}`, despesa);
  }

  PutDespesa(id :number,despesa: Despesas) : Observable<Despesas[]> {
    return this.http.put<Despesas[]>(`${this.apiUrl}/${id}`, despesa);
  }

  DeleteDespesa(id :number) : Observable<Despesas[]> {
    return this.http.delete<Despesas[]>(`${this.apiUrl}/${id}`);
  }



}
