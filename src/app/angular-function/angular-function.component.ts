import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-angular-function',
  templateUrl: './angular-function.component.html',
  styleUrls: ['./angular-function.component.css']
})
export class AngularFunctionComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  //property binding and string interpolation different   beeter option is property binding
  userName='peeter';
  disable=false;
// if else  condition is here..
show=false;
//else if condiotn
color='blue';

//switch case 
day='suterday';

//for loop
users=['ram','shyam','geeta'];

detailsValue=[
  {
    name:'ram',
    address:'bombey',
    mob:89765645543434
  }
]

// Array of object getting value 
 Employee = [
 {"ID":"Ecare_435346","name":"rahul","father":"gupta","address":"delhi","mob":"78765656545","mother_name":"seeta","localAddress":"lucknow"},
 {"ID":"Ecare_0809808","name":"shyam","father":"mishra","address":"delhi","mob":"78765656545","mother_name":"seeta","localAddress":"lucknow"},
]

//NESTED FOR LOOP USING
companyEmployee=[
{ID:"cmp_09",name:"geeta",address:['chitrakoot','uttar pradesh'],social:['facebook','gmail']},
{ID:"cmp_09",name:"geeta",address:['Allahabad','UP'],social:['facebook','gmail']}
]


//MULTI DIMENTIONAL ARRAY 
cmpWorkers=[
  {ID:"cmp_09",name:"geeta",
  address:['chitrakoot','uttar pradesh'],//array
  social:['facebook','gmail'],        //array
  IdProof:['Adhar Card','penCard','voter ID Card','Birth Card']  //array
}
  ]    

}
