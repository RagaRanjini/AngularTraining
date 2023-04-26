import { Component,Input } from '@angular/core';
import { GetProductsService } from 'src/app/services/get-products.service';
import { reviewStyles } from 'src/app/styles/Stylepage';
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  styles=reviewStyles
  review:any;
  @Input() thisid:any;
  constructor(private gp:GetProductsService){
    this.gp.gettingReview().subscribe(
      {
        next: (data:any)=>this.review=data,
        error:()=>this.review=[]
      }
    )
  }
  onMouseEnter(card : HTMLElement){
    card.style.backgroundColor="#f593e6"
  }
  onMouseLeave(card : HTMLElement){
    card.style.backgroundColor="#72f7cb"
  }
}
