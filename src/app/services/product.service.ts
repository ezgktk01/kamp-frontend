import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44324/api/';

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {//bir servisten api isteği yapmak için kullanılacak.
   let newPath = this.apiUrl + "products/getall"
   return this.httpClient.get<ListResponseModel<Product>>(newPath);
    //Gelen datayı bu responsemodele map edecez.
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {//bir servisten api isteği yapmak için kullanılacak.
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
     //Gelen datayı bu responsemodele map edecez.
   }
}
