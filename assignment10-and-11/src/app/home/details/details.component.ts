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
  message:any;
  Form:any;
  styles=detailsStyles
  id:any;
  details:any;
  constructor(private fb:FormBuilder,private gp:GetProductsService,private ar:ActivatedRoute){
    this.Form = this.fb.group({
      message:['',[Validators.required,Validators.minLength(15)]]
    });
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
      product: this.id,
      message: this.Form.value.message
    }
    this.gp.postingReview(data).subscribe(
      {
        next: (data:any)=>{
          alert('We got your review. Thanks !')
          location.reload();
        },
        error:()=>alert('Your review is not posted --Some error.')
      }
    )
  }

}
