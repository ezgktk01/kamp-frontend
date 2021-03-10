import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44324/api/products/getall";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{//bir servisten api isteği yapmak için kullanılacak.
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);
    //Gelen datayı bu responsemodele map edecez.
  }

}
