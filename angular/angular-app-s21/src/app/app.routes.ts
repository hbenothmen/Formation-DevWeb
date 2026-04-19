import { Routes } from '@angular/router';
//import { Lifecycle } from './lifecycle/lifecycle';
import { PipeComponent } from './pipe-component/pipe-component';
import { Lifecycle } from './lifecycle/lifecycle';
export const routes: Routes = [
  {path:'pipecomponent', component:PipeComponent},
  {path:'lifecycle', component:Lifecycle}  
];
