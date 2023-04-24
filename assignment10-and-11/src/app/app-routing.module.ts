import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/body/body.component';
import { ComplaintComponent } from './home/complaint/complaint.component';

const routes: Routes = [
  {path:"",component: BodyComponent},
  {path:"complaint",component: ComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
