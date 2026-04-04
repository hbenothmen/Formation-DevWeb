import { Routes } from '@angular/router';
import { MovieCard } from './movie-card/movie-card';
import { RouterLink } from '@angular/router';
import { Home } from './home/home';
import { Moviedetails } from './moviedetails/moviedetails';
export const routes: Routes = [
    {path:'movie-card', component:MovieCard},
    {path:'home', component:Home},
    {path:'moviedetails/:id', component:Moviedetails}
];
