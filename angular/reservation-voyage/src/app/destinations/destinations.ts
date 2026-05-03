import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { combineLatest, debounceTime, startWith, switchMap, map } from 'rxjs';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { DestinationCard } from '../destination-card/destination-card';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-destinations',
  standalone:true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule,DestinationCard],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {
private destinationserv=inject(DestinationService);
//creer une fonction pour lire les donnees de notre service 
//initialisation des voyages
destvoyage:any[]=[];
ngOnInit(){
  this.destinationserv.readDest().subscribe((d:any)=>{
this.destvoyage=d;
  })
}
//search destination
 // Inputs
  searchControl = new FormControl('');
  prixControl = new FormControl<number | null>(null);

  // Observable filtré
  voyages$ = combineLatest([
  this.searchControl.valueChanges.pipe(startWith('')),
  this.prixControl.valueChanges.pipe(startWith(null))
]).pipe(

  debounceTime(300),

  switchMap(([search, prix]) =>
    this.destinationserv.readDest().pipe(

      map(voyages => {

        const hasSearch = !!search?.trim();
        const hasPrix = prix !== null && prix !== undefined;

        // 🔥 rien au début
        if (!hasSearch && !hasPrix) {
          return [];
        }
        
     //retourner les voyages filtrés
        return voyages.filter((v: any) =>
          (!search || v.pays.toLowerCase().includes(search.toLowerCase())) &&
          (!prix || v.prix <= prix)
        );
      })

    )
  )
);
//add favoris 
//favoris: any[] = [];//declaration de la liste
constructor(
  private service:DestinationService,
  private auth:AuthService 
){}
onAddFavoris(destvoyage: any) {
const user=this.auth.currentUser();
if(!user){
  alert("Connecter-vous");
  return;
}}
// const fav={
//   userId:user.id,
//   voyageId:destvoyage.id,
//   destination:
// }
  // éviter doublon
  // const exist = this.favoris.find(v => v.id === destvoyage.id);//find() parcourt le tableau favoris
//si l'un des voyages déjà présents (v) possède le même ID que celui que tu essaies d'ajouter (destvoyage).
  // if (!exist) {
  //   this.favoris.push(destvoyage);
  //   alert("❤️ Ajouté aux favoris");
  // } else {
  //   alert("⚠️ Déjà dans les favoris");
  // }

  // console.log("Favoris:", this.favoris);
}



