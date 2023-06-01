import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/car-detail';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit{
  rentalAddForm:FormGroup;
  minDate = new Date();
  CarDetail:CarDetail[];
  ModelOfRental:Rental
  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private rentalService:RentalService,
    private router:Router,
    private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.createRentalAddForm();
  }
  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      carId:["",Validators.required],
      customerId:["",Validators.required],
      rentDate:["",Validators.required],
      returnDate:["",Validators.required]
    })
  }

  IsCarAvaible(){
    if(this.rentalAddForm.valid){
      this.rentalService.IsCarAvaible(this.CarDetail[0].carId)
      .subscribe(response=>{
        this.toastrService.success(response.message,"Başarılı")
        this.sendData();
        this.router.navigate(["/cars/payment",this.CarDetail[0].carId])
      })
    };
  }
  sendData(){
    this.ModelOfRental=Object.assign({},this.rentalAddForm.value)//Burada aldığım veriyi başka componentlerde kullanabilmek için bu servisi yazdık.
    // this.paymentService.updateData(this.modelOfRental)
  }
  
  
}
