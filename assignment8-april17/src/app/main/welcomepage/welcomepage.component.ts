import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from 'src/app/home/form/form.component';
import { welcomeStyles } from 'src/app/styles/stylefile';
@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent {
  styles=welcomeStyles;
  constructor(public dialog: MatDialog) {}

  openForm(): void {
    this.dialog.open(FormComponent);
}
}
