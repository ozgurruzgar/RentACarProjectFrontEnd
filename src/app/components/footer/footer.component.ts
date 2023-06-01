import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
baseUrl="https://localhost:44387/Uploads/Images/Social_Media/";
constructor(){}
ngOnInit(): void {

}
}
