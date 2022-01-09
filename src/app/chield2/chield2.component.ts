import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chield2',
  templateUrl: './chield2.component.html',
  styleUrls: ['./chield2.component.css']
})
export class Chield2Component implements OnInit {

  constructor() { }
@Output() updateDataEvent=new EventEmitter<string>();
@Output() chieldValue=new EventEmitter<string>();
@Output() getNumberValue=new EventEmitter<string>();
  ngOnInit(): void {
  }

}
