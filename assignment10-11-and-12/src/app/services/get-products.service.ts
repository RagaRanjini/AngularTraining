import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  httpOptions:any;
  constructor(private http:HttpClient) { }
  getProducts():Observable<any>{
    return this.http.get("http://localhost:4500/products")
  }
  getDetails(id:any):Observable<any>{
    return this.http.get("http://localhost:4500/products/"+id)
  }
  postingReview(data:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  
  return this.http.post("http://localhost:4500/reviews",data,this.httpOptions);
  }
  gettingReview():Observable<any>{
    return this.http.get("http://localhost:4500/reviews")
  }
}
