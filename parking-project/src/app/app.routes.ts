import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Connexion } from './connexion/connexion';
import { Register } from './register/register';
export const routes: Routes = [

{
 path:'home', component:Home},
 {path:'connexion', component:Connexion},
 {path:'register',component:Register}  
];