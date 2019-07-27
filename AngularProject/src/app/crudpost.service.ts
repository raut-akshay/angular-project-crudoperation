import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudpostService {
  public apiurl="http://127.0.0.1:8080/api/postperson";
  
  constructor(private http:HttpClient) { }

  addperson(data):Observable<person[]>{
    return this.http.post<person[]>(this.apiurl,(data));
  }

}
