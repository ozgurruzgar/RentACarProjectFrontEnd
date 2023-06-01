import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private carService:CarService){}

    ngOnInit(): void {
      this.createCarAddForm();
    }
    createCarAddForm(){
      this.carAddForm = this.formBuilder.group({
        brandId:["",Validators.required],
        colorId:["",Validators.required],
        modelYear:["",Validators.required],
        model:["",Validators.required],
        description:["",Validators.required],
        dailyPrice:["",Validators.required],
      }) 
    }
    addCar(){
      if(this.carAddForm.valid) {
        let carModel = Object.assign({},this.carAddForm.value)
        this.carService.addCar(carModel).subscribe(response=>{
          console.log(response)
          this.toastrService.success(response.message,"Başarılı")
        },ResponseError=>{
          if(ResponseError.error.Errors.length>0){  
            for (let i = 0; i <ResponseError.error.Errors.length; i++) { 
               this.toastrService.error(ResponseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası")
            }
          }
        })
      }
    }
}
