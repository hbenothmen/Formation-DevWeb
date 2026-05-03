import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-destination-card',
  imports: [],
  standalone:true,
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.css',
})
export class DestinationCard {
  @Input () voyage:any; //pour reçoit les données 
  // Elle permet au composant destination d'envoyer les données d'un voyage à la destinationcard (enfant) 
  @Output () addFavoris= new EventEmitter<any>(); //pour envoyer l'evennement
  //EventEmitter<any>():c'est l'outil qui permet de créer et d'envoyer l'événement.
ajouterFavoris(){
  this.addFavoris.emit(this.voyage);
  //emit(this.voyage) : L'enfant envoie un message au parent en disant :
  //Quelqu'un a cliqué sur le bouton favoris pour ce voyage précis, tiens, voici ses données
}
}
