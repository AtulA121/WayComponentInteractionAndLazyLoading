import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent implements OnInit {

  @Input("obj") obj;

  @Output() obj2=new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.obj2.emit("hii parent...");
  }

}
