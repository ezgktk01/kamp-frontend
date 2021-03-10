import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
//httpClient ile backend deki dataya ulaşabiliyoruz.
  products:Product[] = [];
  apiUrl = "https://localhost:44324/api/products/getall";
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {//product açıldığında çalışan kod
    this.getProducts();//başka bir fonk. çağırırken başına this yazıyoruz
  }

  getProducts(){
    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe((response)=>{
      this.products = response.data
    });//Gelen datayı bu responsemodele map edecez.
  }
}
