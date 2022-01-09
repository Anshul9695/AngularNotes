import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AngularFunctionComponent} from './angular-function/angular-function.component';
import{ChieldComponent} from './chield/chield.component';
import {Chield2Component} from './chield2/chield2.component'
const routes: Routes = [
  {
    path:'angularfuncation',
    component:AngularFunctionComponent
  },
  {
    path:'chield',
    component:ChieldComponent

  },
  {
    path:'chield2',
    component:Chield2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


