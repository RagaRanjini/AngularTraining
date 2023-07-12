import { Component } from '@angular/core';
import { PostdataService } from './services/postdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newangular';
  name:any;
  email:any;
  phn:any;
  errors: string[] = [];
  dob:any;

  constructor(private pd:PostdataService){}

  submit() {
    this.errors = [];
      if (this.name == undefined || this.name.length < 3)
        this.errors.push("Name should be greater than 3 characters");
      if (this.phn == undefined || this.phn.length < 10 || this.phn.length > 10)
        this.errors.push("Phone number should be in valid format");
      if (this.dob == undefined)
      this.errors.push("Date of birth field is empty");
      if (this.email === undefined || !this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.errors.push("Email field is Invalid");
      }
    console.log('Errors:', this.errors);

    if (this.errors.length == 0) {
      let obj = {
        name: this.name,
        dob: this.dob,
        email: this.email,
        phone: this.phn
      }


      this.pd.postdata(obj).subscribe({
        next: () => {
          alert("Your data has been added successfully");
          this.name = "";
          this.dob = "";
          this.email = "",
          this.phn = ""
        },
        error: () => {
          alert("There was a problem adding your data");
        }
      });
    }
  }
}
