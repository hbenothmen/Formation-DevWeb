import { Routes } from '@angular/router';
import { Destinations } from './destinations/destinations';
import { DestDetails } from './dest-details/dest-details';
import { Admin } from './admin/admin';
import { AddDestination } from './add-destination/add-destination';
import { Signup } from './signup/signup';
import { Signin } from './signin/signin';
import { ModifierDest } from './modifier-dest/modifier-dest';
import { AddUser } from './add-user/add-user';
import { SuprimerDestination } from './suprimer-destination/suprimer-destination';
import { ModifierUser } from './modifier-user/modifier-user';
import { SupprimerUser } from './supprimer-user/supprimer-user';
import { authGuard } from './services/auth.guard';
//import { Reservation } from './reservation/reservation';
import { DestinationCard } from './destination-card/destination-card';
import { IsAdmin } from './is-admin/is-admin';
import { adminGuard } from './services/admin.guard';
export const routes: Routes = [
    {path:'destination', component:Destinations},
    {path:'destdetails/:id', component:DestDetails},
    
    {path:'administration', component:Admin, canActivate:[adminGuard] },
//{path:'administration', component:Admin},
    {path:'adddestination',component:AddDestination},
    {path: 'signup',component:Signup},
    {path: 'signin', component:Signin},
    {path: 'modifdestination',component:ModifierDest},
    {path: 'adduser', component:AddUser},
    {path: 'supdestination', component:SuprimerDestination},
    {path:'modifieruser', component:ModifierUser},
    {path: 'supprimeruser', component:SupprimerUser},
    {path: 'reservation/:id',component: DestDetails,canActivate: [authGuard]},
    {path:'destinationcard', component:DestinationCard},
    {path:'isadmin', component:IsAdmin}
];
