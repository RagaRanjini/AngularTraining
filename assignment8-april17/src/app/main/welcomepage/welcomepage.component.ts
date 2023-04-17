import { Component } from '@angular/core';
import { welcomeStyles } from 'src/app/styles/stylefile';
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {
  styles=welcomeStyles;
}
