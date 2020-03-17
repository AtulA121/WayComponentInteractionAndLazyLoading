import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChieldComponent } from '../view-chield/view-chield.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit,AfterViewInit {

  @ViewChild(ViewChieldComponent,{static : true})
  private chieldComponent : ViewChieldComponent;

  fromChield : String="";
  chieldName : String="";
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    
  }

  changeName(){
    this.chieldComponent.myName="hii from parent...";
  }

  getChieldName(){
    this.chieldName=this.chieldComponent.name;
  }

}
