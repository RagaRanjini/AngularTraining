import { Component,Input } from '@angular/core';
import { bodyStyles } from '../styles/styledata';
import { productStyles } from '../styles/styledata';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  bodystyles=bodyStyles;
  productstyles=productStyles;
  @Input() heading="";
  @Input() paragraph="";
}
