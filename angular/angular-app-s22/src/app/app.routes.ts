import { Routes } from '@angular/router';
import { S22 } from './s22/s22';
import { S22Parent } from './s22-parent/s22-parent';

export const routes: Routes = [
    {path:'child',component:S22},
    {path:'parent', component:S22Parent}
];
