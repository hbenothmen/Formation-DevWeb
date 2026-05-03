import { Component,inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DestinationService } from '../services/destination.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mes-favoris',
  imports: [CommonModule],
  templateUrl: './mes-favoris.html',
  styleUrl: './mes-favoris.css',
})
export class MesFavoris {
  private auth=inject(AuthService);
  private service=inject(DestinationService);
  favorites:any[]=[];
  ngOnInit(){
    const user=this.auth.currentUser();
  if(user){
    this.service.getFavoritesByUser(user.id).subscribe(
      data=>this.favorites=data
   
    );
     console.log(this.auth.currentUser);
  }
  
  }
}
