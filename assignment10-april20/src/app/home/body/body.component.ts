import { Component,Input } from '@angular/core';
import { productStyles } from 'src/app/styles/Stylepage';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  @Input() products:any=[];
  @Input() value1:any;
  @Input() value2:any;
  styles=productStyles
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
}
