import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/car-detail';
import { CarImage } from 'src/app/models/car-image';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarDetailService } from 'src/app/services/car-detail-service';
import { CarImageService } from 'src/app/services/car-image-service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails: CarDetail[]=[];
  carImages: CarImage[]=[];
  brands:Brand[];
  colors:Color[];
  carFilterText="";
  brandFilter:number=0;
  colorFilter:number=0;
  branddFilter:number=0;
  colorrFilter:number=0;
  imageOfPath:string;
  baseUrl="https://localhost:44387/Uploads/Images/"

  constructor(private carService: CarService,
    private activatedRoute:ActivatedRoute,
    private carDetailService:CarDetailService,
    private carImageService:CarImageService,
    private brandService:BrandService,
    private colorService:ColorService,
    private toastrService:ToastrService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"] && params["colorId"]){
        this.getCarsByBrandAndColor(params["brandId"],params["colorId"])
      }
      else if(params["brandId"])
      {
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
      else{
        this.getCars();
        this.getBrands();
        this.getColors();
      }
    })
  }

  getCarsByBrandAndColor(brandId:number,colorId:number){
    this.carService.getCarsByBrandAndColor(brandId,colorId).subscribe(response=>{
      this.carDetails=response.data
    })
    this.getBrands();
    this.getColors();
    this.toastrService.success("Araçlar ilgili marka ve renge göre filtrelendi.")
  }
  getSelectedBrand(brandId:number){
    if(this.brandFilter==brandId) return true;
    else return false; 
  }
  getSelectedColor(colorId:number){
    if(this.colorFilter==colorId) return true;
    else return false; 
  }

  getCars() {
    this.carDetailService.getAllCarDetails().subscribe((response) => {
      this.carDetails = response.data;
    });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data
    })
    this.toastrService.success("Araçlar ilgili markaya göre filtrelendi.")
  };
  getCarsByColor(ColorId:number){
    this.carService.getCarsByColor(ColorId).subscribe(response=>{
      this.carDetails=response.data
    })
    this.toastrService.success("Araçlar ilgili renge göre filtrelendi.")
  };
  getCarImageByCarId(carId:number){
    this.carImageService.getCarImagesByCar(carId).subscribe(response=>{
      const imagePath=response.data[2].imagePath;
      this.imageOfPath = this.baseUrl+imagePath;
    })
    return this.imageOfPath;
  }
  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data
    })
  }
  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data
    })
  }
}
