import { Component } from '@angular/core';
import { CommonService } from './common.service';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  IschangeLocation = false;
  TodayDate: Date;
  weatherdata: any;
  constructor(private service:CommonService){
    this.TodayDate = new Date();
  }
  changeLocation(){
    this.IschangeLocation=this.IschangeLocation==true?false:true;
  }
  getweatherdatabycity(){
    debugger
    var city =$('#cityName').val();
    this.service.getweatherData(city).subscribe((data:any)=>{
      console.log('data',data)
      this.weatherdata=data;
    })
  }
}
    
  