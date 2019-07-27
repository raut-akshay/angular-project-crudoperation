import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
   public apiurl="http://127.0.0.1:8080/api/getperson";
  constructor(private http:HttpClient) { }
   
    public getpersondata():Observable<person[]>
    {
      return this.http.get<person[]>(this.apiurl);
    }
}
