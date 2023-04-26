import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  getDetails(id:any):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
  }
}
