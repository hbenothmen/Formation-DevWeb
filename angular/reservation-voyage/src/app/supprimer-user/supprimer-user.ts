import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { NgForm,FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-supprimer-user',
  imports: [FormsModule,RouterLink],
  templateUrl: './supprimer-user.html',
  styleUrl: './supprimer-user.css',
})
export class SupprimerUser {
  private userService=inject(DestinationService);
user:any[]=[];
  userid:string='';
  supprimerUser(form:NgForm){
    this.userService.deleteUser(this.userid).subscribe(u=>{
this.user=this.user.filter(u=>u.id!==this.userid)
    });
form.reset();
}
}
