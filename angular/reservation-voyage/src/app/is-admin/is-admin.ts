import { Component,inject } from '@angular/core';
import { AdminAuthService } from '../services/admin.auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-is-admin',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './is-admin.html',
  styleUrl: './is-admin.css',
})
export class IsAdmin {
   private service=inject(AdminAuthService);
  private router=inject(Router);
  credentials={email:'',password:''};
  isAdmin(){
this.service.isadmin(this.credentials).subscribe(success =>{
  if (success){
    alert('Connexion réussie');
    this.router.navigate(['/administration']);
    console.log(this.credentials);
  }
  else {
   alert('Email ou mot de passe incorrect');
  }
  
});
}
}
