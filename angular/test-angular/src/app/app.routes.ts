import { Routes } from '@angular/router';
import { CounterComponent } from './counter-component/counter-component';
import { AjoutProduit } from './ajout-produit/ajout-produit';
import { UserListComponent } from './user-list-component/user-list-component';

export const routes: Routes = [
    {path:'counter', component:CounterComponent},
    {path: 'ajout', component:AjoutProduit},
    {path: 'userlist', component:UserListComponent}
];
