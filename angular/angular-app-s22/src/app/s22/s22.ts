import { Component,EventEmitter,Input, Output } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-s22',
  imports: [],
  templateUrl: './s22.html',
  styleUrl: './s22.css',
})
export class S22 {
  @Input() message:string='';//propriété préte a recevoir une valeur de son parent
@Output() alerte=new EventEmitter<string>();//propriété préte a envoyer une valeur a son parent
notifparent(){
  this.alerte.emit('salut c est un message de votre enfant');//envoie une valeur a son parent
}

ngOnInit() {
const chiffres$=of(1,2,3,4,5,6,8,0,9);
chiffres$.pipe( filter(n=>n % 2===0), // n est pair chiffres(2,4,6,8,0)
map(n=>n*10) //chiffres(20,40,60,80,0)
).subscribe(n=>{console.log(n)});
  }
}
