import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-chield',
  templateUrl: './view-chield.component.html',
  styleUrls: ['./view-chield.component.css']
})
export class ViewChieldComponent implements OnInit {

  myName : String="";
  name : String="atul";
  
  constructor() { }

  ngOnInit() {
  }

}
