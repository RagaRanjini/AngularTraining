import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { ComplaintComponent } from './home/complaint/complaint.component';
import { DetailsComponent } from './home/details/details.component';

const routes: Routes = [
  {path:"",component: BodyComponent},
  {path:"complaint",component: ComplaintComponent},
  {path:"products/:id",component: DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
