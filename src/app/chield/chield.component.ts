import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chield',
  templateUrl: './chield.component.html',
  styleUrls: ['./chield.component.css']
})
export class ChieldComponent implements OnInit {

  constructor() { }
@Input() parentValue='';
@Input() parentValueS='';
@Input() pvalue='';
@Input() data=0;

  ngOnInit(): void {
  }

}
