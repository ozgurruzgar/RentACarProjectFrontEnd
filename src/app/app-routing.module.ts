import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AllinoneComponent } from './components/allinone/allinone.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color-add/color-add.component';
import { CarAddComponent } from './components/car-add/car-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomepageComponent},
  {path:"cars", component:AllinoneComponent},
  {path:"cars/add", component:CarAddComponent},
  {path:"colors", component:ColorComponent},
  {path:"colors/add", component:ColorAddComponent},
  {path:"brands", component:BrandComponent},
  {path:"brands/add", component:BrandAddComponent},
  {path:"rentals", component:RentalComponent},
  {path:"customers", component:CustomerComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/carDetail/:carId", component:CarDetailComponent},
  {path:"cars/brand/:brandId/color/:colorId", component:CarComponent},
  {path:"cars/payment/:carId", component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
