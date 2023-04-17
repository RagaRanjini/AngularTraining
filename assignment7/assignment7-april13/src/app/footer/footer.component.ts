import { Component,Input } from '@angular/core';
import { footerStyles } from '../styles/styledata';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerstyles=footerStyles;
  @Input() contacts:string[]=[];
  @Input() socialmedias:string[]=[];
  @Input() emails:string[]=[];
}
