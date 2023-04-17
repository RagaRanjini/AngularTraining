import { Component } from '@angular/core';
import { menuOptions } from './info/data';
import { footerdata } from './info/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment7-april13';
  options=menuOptions;
  footer=footerdata;
}
