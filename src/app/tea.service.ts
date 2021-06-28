import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeaService {

  allTeas = 'http://localhost:8055/get-all-teas'
  teasByCategory = 'http://localhost:8055/teas-by-category'
  teasByCategoryAndType='http://localhost:8055/teas-by-category-or-type'
  teaById='http://localhost:8055/tea-by-id'

  constructor(private httpClient: HttpClient) {}

  getAllTeas(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.allTeas);
  }
  getByCategory(category: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.teasByCategory + '/' + category);
  }
  getByTypeAndCategory(type: string): Observable<any[]> {
    return this.httpClient.get<any[]>(this.teasByCategoryAndType + '/' + type);
  }
  getTeaById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.teaById + '/' + id)
  }
}
