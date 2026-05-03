import { Component,inject, OnInit } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dest-details',
  standalone:true,
  imports: [],
  templateUrl: './dest-details.html',
  styleUrl: './dest-details.css',
})
export class DestDetails implements OnInit{
  private destService=inject(DestinationService);
  private route=inject(ActivatedRoute);
  private id =this.route.snapshot.params['id'];
private router=inject(Router);
private auth=inject(AuthService);
details:any=null;
 ngOnInit(){
    return this.destService.readDest().subscribe((d:any[])=>{
    this.details=d.find((v:any) =>v.id==this.id);
    //console.log('destination trouvee:',this.details);
   }); 
  
}
//reservation
reserver() {
   if (!this.auth.isOnline()) {
    alert("⚠️ Connectez-vous d'abord");
    this.router.navigate(['/signin']);
    return;
  }

  if (!this.details.disponible) {
    alert("❌ Voyage non disponible");
    return;
  }

  const reservation = {
    voyageId: this.details.id,
    destination: this.details.destination,
    prix: this.details.prix,
    date: new Date().toISOString() //new Date(): crée un objet Date JavaScript qui contient la date et l'heure exactes du moment où le code est exécuté (l'instant T)
    //toISOString():C'est une méthode qui convertit cet objet Date en une chaîne de caractères (string) au format standard international ISO 8601.
    //transforme la date en texte que json-server peut enregistrer proprement dans ton fichier db.json parceque json ne stocke que des textes
  };
//envoie une requête POST pour créer la réservation.
  this.destService.addReservation(reservation).pipe(
//Le switchMap attend que la réservation soit réussie, il bascule immédiatement sur updateVoyage(...) pour changer le statut du voyage en disponible: false.
    switchMap(() =>
      this.destService.updateVoyage(this.details.id, { disponible: false })
    )
//lorsque les deux requêtes (création + mise à jour) sont terminées avec succès subscribe declanche pour mettre a jour l'interface
  ).subscribe(() => {
    this.details.disponible = false;
    alert("✅ Réservation confirmée");
  });
}
}
