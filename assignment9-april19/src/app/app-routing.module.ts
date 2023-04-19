import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ReachusComponent } from './pages/reachus/reachus.component';
import { HomeComponent } from './pages/home/home.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';


const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path: "testimonials",component:TestimonialComponent},
  {path: "reachus", component:ReachusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
