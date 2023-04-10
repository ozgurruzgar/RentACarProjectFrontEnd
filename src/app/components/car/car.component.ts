import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  car = {
    carId: 1,
    carBrand: 'Volkswagen',
    carModel: 'Tiguan',
    dailyPrice: 7500,
  };
  car2 = {
    carId: 2,
    carBrand: 'Volkswagen',
    carModel: 'T-roc',
    dailyPrice: 6500,
  };
  car3 = {
    carId: 3,
    carBrand: 'Volkswagen',
    carModel: 'Passat',
    dailyPrice: 10000,
  };
  car4 = {
    carId: 4,
    carBrand: 'Volkswagen',
    carModel: 'Touareg',
    dailyPrice: 30000,
  };

  cars = [this.car, this.car2, this.car3, this.car4];
}
