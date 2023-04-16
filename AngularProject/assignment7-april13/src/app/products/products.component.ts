import { Component,Input } from '@angular/core';
import { productStyles } from '../styles/styledata';
import { productsdata } from '../info/data';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productstyles=productStyles;
  products=productsdata;
}
