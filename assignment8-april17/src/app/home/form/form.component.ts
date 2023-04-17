import { Component } from '@angular/core';
import { formStyles } from 'src/app/styles/stylefile';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  styles= formStyles;
}
