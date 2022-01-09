import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ui-project';
  //PARENT TO CHIELD DATA SENDING 
  parentData="hello this is anshul mishra";
  data2="this is the second value to sent chield by parebnt";
  users="helo";
  data=10;
  updateDataValue(){
    this.data=Math.floor(Math.random()*10);
  }
}
