import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-reachus',
  templateUrl: './reachus.component.html',
  styleUrls: ['./reachus.component.css']
})
export class ReachusComponent {
 contactlist:any;
      constructor(private cs:ContactService){
        this.cs.getContacts().subscribe(
          {
            next:(data:any)=>this.contactlist=data,
            error:()=>this.contactlist=[]
          }
        )
      }
}
