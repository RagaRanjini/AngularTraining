import { Component } from '@angular/core';
import {theme1,theme2} from './appdata/styledata'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Raga Ranjini';
  services:string[]=["service1","service2","service3"];
  // themes:any=[theme1,theme2]
  currenttheme=theme1
  changetheme(theme:string):void{
    this.currenttheme=theme=="theme1"? theme1: theme2;
  }
  currentfont:string="Courier";
}
