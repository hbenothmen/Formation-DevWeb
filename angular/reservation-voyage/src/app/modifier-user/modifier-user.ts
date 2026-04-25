import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifier-user',
  imports: [FormsModule],
  templateUrl: './modifier-user.html',
  styleUrl: './modifier-user.css',
})
export class ModifierUser {
  private userService=inject(DestinationService);
  user:any = {
    nom:'',
    email:'',
    password:'',
     id:''
  }
  User:any[]=[];
  modifierUser(form:NgForm){
     if (form.invalid) return;
     this.userService.updateUser(this.user.id,this.user).subscribe((apduser:any)=>{
this.User=this.User.map(u=>
  apduser.id==this.user.id ? apduser:u
     );
    form.reset(); }

  )}
}
