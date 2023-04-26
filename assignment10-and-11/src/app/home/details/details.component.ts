import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from 'src/app/services/get-products.service';
import { detailsStyles } from 'src/app/styles/Stylepage';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  name:any;
  reviewmsg:any;
  Form:any;
  styles=detailsStyles
  id:any;
  details:any;
  constructor(private gp:GetProductsService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params)=>{
          this.id=params['id']
          this.readData()
        },
        error:()=>this.id=0
      }
    )
  }
  readData(){
    this.gp.getDetails(this.id).subscribe({
      next: (data:any)=> this.details =data,
      error: ()=> this.details = {}
  })
  }
  postReview(){
    let data={
      name: this.name,
      product: this.id,
      reviewmsg: this.reviewmsg
    }
    this.gp.postingReview(data).subscribe(
      {
        next: ()=>{
          alert('We got your review. Thanks !')
          location.reload();
        },
        error:()=>alert('Your review is not posted --Some error.')
      }
    )
  }

}
