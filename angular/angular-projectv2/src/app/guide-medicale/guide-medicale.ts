import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-guide-medicale',
  standalone: true,
  imports: [FormsModule, RouterOutlet,NgClass,CommonModule],
  templateUrl: './guide-medicale.html',
  styleUrl: './guide-medicale.css',
})
export class GuideMedicale {

   Pharmadoc=[{
    id:1,
    name:"Dr Belhsan Sami",
    speciality:"Medecin",
    ville:"Tunis",
    disponible:"true"
  },
  {
    id:2,
    name:"dr Ahmadi Marwa",
    speciality:"Medecin",
    ville:"Bizerte",
    disponible:"true"
  },
  {
    id:3,
    name:"Dr Masoudi Ramzi",
    speciality:"Pharmacie",
    ville:"Tunis",
    disponible:"false"
  },
  {
    id:4,
    name:"Dr Arfaoui Emen",
    speciality:"Medecin",
    ville:"Tunis",
    disponible:"false"
  },
  {
    id:5,
    name:"Dr Belagha Reem",
    speciality:"Pharmacie",
    ville:"Sousse",
    disponible:"true"
  }
  
];
 specialites = ['Medecin', 'Pharmacie'];

  villes = ['Tunis', 'Sfax', 'Sousse', 'Bizerte','Kef'];
  selectedSpecialite = '';
  selectedVille = '';

   filteredMedecins: any[] = [];

  rechercher() {
    this.filteredMedecins = this.Pharmadoc.filter(m => {
      return (
        (this.selectedSpecialite === '' || m.speciality === this.selectedSpecialite) &&
        (this.selectedVille === '' || m.ville === this.selectedVille)
      );
    });
    
    }
  rendezvous(m: any){
      if(m.disponible=="true"){
        alert("vous pouvez reserver une séance");
      }
      else{
         alert("n'est pas disponible !");
      }
}
    
}

