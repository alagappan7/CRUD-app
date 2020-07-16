import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  { path:'premium',component:Comp2Component},
  
  { path:'signup',component:SignupComponent,
  children: [
    { path:'deluxe',component:Comp3Component },
    
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingcomp=[Comp2Component,Comp3Component,SignupComponent]