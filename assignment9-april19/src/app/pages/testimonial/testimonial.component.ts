import { Component } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  feedbacklist:any ;
  constructor(private ts:TestimonialService)
{
  this.ts.getFeedbacks().subscribe(
    {
      next: (data:any)=>this.feedbacklist=data,
      error: ()=> this.feedbacklist=[]
    }
  )
}
}
