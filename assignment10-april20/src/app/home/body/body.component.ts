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
    cardbox.style.transform="scale(1.02)",
    cardbox.style.transition="transform .2s"
    cardbox.style.color="#f72556"
  }
  onMouseLeave(cardbox: HTMLElement){
    cardbox.style.transform="scale(1.0)"
    cardbox.style.color="black"
  }
}
