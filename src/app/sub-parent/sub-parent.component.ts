import { Component, OnInit } from '@angular/core';
import { AgeService } from '../age.service';

@Component({
  selector: 'app-sub-parent',
  templateUrl: './sub-parent.component.html',
  styleUrls: ['./sub-parent.component.css']
})
export class SubParentComponent implements OnInit {

  myAge : any;
  age : any;
  
  constructor(private _ser : AgeService) {
    this._ser.event.subscribe(res=>{
      this.age=res;
    });
   }

  ngOnInit() {
  }

  publicAge(){
    console.log("chage age : ",this.myAge);
    this._ser.changeAge(this.myAge);
  }

}
