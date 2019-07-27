import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudupdateService {
  
  public apiurl= "http://127.0.0.1:8080/api/putperson";
  
  constructor(private http:HttpClient) { }
  
  putperson(data:any):Observable<person[]>{
    return this.http.put<person[]>(this.apiurl,(data));
  }

}
