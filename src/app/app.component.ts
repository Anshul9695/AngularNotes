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

// GET CHIELD COMPONENT VALUE AND PRINT IN PARENT COMPONENT
getData="";
getChieldValue(item:string){
console.log(item);
this.getData=item;
}

getttingData="";
getValues(data:string){
this.getttingData=data;
}
numberValue='';
dataValue(val:string){
this.numberValue=val;
}

//TWO WAY BINDING CONCEPT IS HERE...............
name:any;
father:any;
address:any;
mob:any;
gmail:any;


}
