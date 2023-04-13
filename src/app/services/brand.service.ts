import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandResponseModel } from '../models/brandResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44387/api/brands/getall";
  constructor(private httpCilent:HttpClient) { }

  getBrands():Observable<BrandResponseModel>{
    return this.httpCilent.get<BrandResponseModel>(this.apiUrl);
  }
}
