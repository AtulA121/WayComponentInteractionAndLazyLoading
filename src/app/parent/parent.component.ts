import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  obj : String="hii chield...";
  chieldDataIs : String="";

  constructor() { }

  ngOnInit() {
  }

  chieldData(event){
    console.log("data form chield : ",event);
    this.chieldDataIs=event;
  }

}
