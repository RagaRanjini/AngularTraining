import { Component,Input } from '@angular/core';
import { productStyles } from 'src/app/styles/Stylepage';
import { homeStyles } from 'src/app/styles/Stylepage';
import { GetProductsService } from 'src/app/services/get-products.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() products:any=[];
  //@Input() value1:any;
  //@Input() value2:any;
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
  stylesp=productStyles
  onMouseEnter(cardbox: HTMLElement){
    cardbox.style.transform="scale(1.03)",
    cardbox.style.transition="transform .4s"
    cardbox.style.color="#e60790"
    cardbox.style.cursor="pointer"
  }
  onMouseLeave(cardbox: HTMLElement){
    cardbox.style.transform="scale(1.0)"
    cardbox.style.color="black"
  }
  onMouseEnterr(a: HTMLElement){
    a.style.color="#e60790"
    a.style.cursor="pointer"
  }
  onMouseLeavee(a: HTMLElement){
    a.style.transform="scale(1.0)"
    a.style.color="black"
  }
}
