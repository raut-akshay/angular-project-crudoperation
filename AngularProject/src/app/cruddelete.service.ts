import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CruddeleteService {
  public apiurl='http://127.0.0.1:8080/api/deleteperson';
  constructor(private http:HttpClient) { }
  
  public deleteperson(data):Observable<person[]>{
    return this.http.delete<person[]>(this.apiurl+ '?id=' + data.id);
  }
}


