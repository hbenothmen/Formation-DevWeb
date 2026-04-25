import { Component,Input,Output,EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-destination-card',
  imports: [NgClass],
  standalone:true,
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.css',
})
export class DestinationCard {
  @Input () voyage:any; //pour reçoit les données
  @Output () addFavoris= new EventEmitter<any>(); //pour envoyer l'evennement
ajouterFavoris(){
  this.addFavoris.emit(this.voyage);
}
}
