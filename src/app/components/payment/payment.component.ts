import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
randomNumber:number 
baseUrl="https://localhost:44387/Uploads/Images/";
constructor(private toastrService:ToastrService){}
ngOnInit(): void {
  
}
rentACar(){
this.toastrService.success("Ödeme Başarılı","Bilgilendirme")
}
}

