import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation',
  imports: [],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
  Pharmadoc=[{
    id:1,
    name:"Dr Belhsan Sami",
    speciality:"Medecin",
    ville:"Tunis",
    disponible:true
  },
  {
    id:2,
    name:"dr Ahmadi Marwa",
    speciality:"Medecin",
    ville:"Bizerte",
    disponible:true
  },
  {
    id:3,
    name:"Dr Masoudi Ramzi",
    speciality:"Pharmacie",
    ville:"Tunis",
    disponible:false
  },
  {
    id:4,
    name:"Dr Arfaoui Emen",
    speciality:"Medecin",
    ville:"Tunis",
    disponible:false
  },
  {
    id:5,
    name:"Dr Belagha Reem",
    speciality:"Pharmacie",
    ville:"Sousse",
    disponible:true
  }
  
];

}
