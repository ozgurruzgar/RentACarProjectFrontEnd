import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44387/api/brands/";
  constructor(private httpCilent:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpCilent.get<ListResponseModel<Brand>>(this.apiUrl+"getall");
  }

  addBrand(brand:Brand):Observable<ResponseModel>{
    return this.httpCilent.post<ResponseModel>(this.apiUrl+"add",brand)
  }

}
