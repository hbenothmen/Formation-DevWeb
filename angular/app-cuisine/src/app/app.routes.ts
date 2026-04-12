import { Routes } from '@angular/router';
import { Recettes } from './recettes/recettes';
import { Details } from './details/details';
import { Repas } from './repas/repas';

export const routes: Routes = [
    {path:'recette', component:Recettes},
    {path:'details/:id',component:Details},
    {path:'repas', component:Repas}
];
