import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetail } from '../models/car-detail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44387/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath= this.apiUrl + "getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + "getbycolor?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarsByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "getbycolorandbrand?brandId="+brandId +"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  addCar(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add",car)
  }
}
