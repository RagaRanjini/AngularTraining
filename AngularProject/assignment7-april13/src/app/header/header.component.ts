import { Component,Input } from '@angular/core';
import { headerStyles } from '../styles/styledata';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerstyles= headerStyles;
  @Input() options:string[]=[]
}
