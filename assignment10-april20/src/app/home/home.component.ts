import { Component } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';
import { homeStyles } from '../styles/Stylepage';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  styles=homeStyles
  options:string[]=[
    "view All",
    "books",
    "cosmetics",
    "electronics",
    "groceries",
    "jewels",
    "outfits",
    "toys"
  ]
  type:string="view All";
  value1:number=0;
  value2:number=105000;
  productslist:any;
  constructor(private gp:GetProductsService){
    this.gp.getProducts().subscribe(
      {
        next: (data:any)=> this.productslist=data,
        error: ()=>this.productslist=[]
      }
    )
  }
}
