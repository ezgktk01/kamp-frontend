import { Component } from '@angular/core';//componenti kullanabilmek için import etmek gerek

@Component({
  selector: 'app-root',//html tagi gibi kullanılabilir.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //tipi any ise her sey olabilir.
  title: string = "northwind";
  user: string = "Ezgi Kütük";
  

}
