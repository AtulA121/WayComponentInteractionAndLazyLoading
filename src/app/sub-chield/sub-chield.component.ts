import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age.service';

@Component({
  selector: 'app-sub-chield',
  templateUrl: './sub-chield.component.html',
  styleUrls: ['./sub-chield.component.css']
})
export class SubChieldComponent implements OnInit {

  age : any;
  myAge : any;

  constructor(private _ser : AgeService) {
    this._ser.event.subscribe(res=>{
      this.age=res;
    });
  }

  ngOnInit() {
  }

  sendToParent(){
    console.log("change age : ",this.myAge);
    this._ser.changeAge(this.myAge);
  }

}
