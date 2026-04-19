import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Products } from './products/products';
import { Details } from './details/details';
import { App } from './app';
export const routes: Routes = [
  {path:'',component:App},
  {path:'products', component:Products},
   {path:'details/:id', component: Details},  
];
