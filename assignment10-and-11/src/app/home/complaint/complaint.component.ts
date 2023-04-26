import { Component , OnInit} from '@angular/core';
import { formStyles } from 'src/app/styles/Stylepage';
import { ComplaintService } from 'src/app/services/complaint.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent  implements OnInit {
  styles=formStyles
  option:string=""
options:any=[
  "Washing Machine",
  "Refrigerator",
  "Air Conditioner",
  "Laptop",
  "Mobile Phone",
  "Lipstick",
  "Nail polish",
  "Eyeliner",
  "Bread",
  "Milk",
  "Goodnight Moon",
  "The hungry Caterpillar",
  "The lord of the Rings",
  "Crop top",
  "Men/Women Jeans",
  "Shirts",
  "Bridal Jewels",
  "Couple ring",
  "Doctor set",
  "Kitchen set",
  "Teddy bears",
  "Mini Scooter",
  "Mini Car",
  "Barbie Doll"
];
myControl = new FormControl();
  filteredOptions: Observable<string[]>=new Observable<string[]>();;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    if (!value) {
      return this.options;
    }
    const filterValue = value.toLowerCase();

    return this.options.filter((option:any) => option.toLowerCase().includes(filterValue));
  }
name:any;
mail:any;
msg:any;
productname:any;
errors:string[]=[];
constructor(private hs:ComplaintService) { }
// ngOnInit(): void {
// }
post(){
  this.errors = []
   
  let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
  if(this.name==undefined || this.name.length<3)
    this.errors.push("Name should be greater than 3 characters")
  if(this.mail==undefined || !expr.test(this.mail))
    this.errors.push("Email should be in email format")
  if(this.msg==undefined || this.msg.length<30)
    this.errors.push("Message should be greater than 30 characters")
  if(this.productname==undefined || this.msg.length<5)
    this.errors.push("Product name is unclear")

    if(this.errors.length==0){
      let obj={
        id:Math.round(Math.random()*100000),
        name: this.name,
        mail: this.mail,
        msg: this.msg,
        productname: this.productname
      }
      this.hs.postComplaint(obj).subscribe({
        next: ()=>{
          alert("Your complaint is posted")
          this.name="",
          this.mail="",
          this.msg="",
          this.productname=""
        },
        error: ()=>alert("There is a problem posting your complaint.")
      }
      )
    }
}
}

