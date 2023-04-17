import { Component } from '@angular/core';
import { homeStyles } from 'src/app/styles/stylefile';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  styles=homeStyles;
}
