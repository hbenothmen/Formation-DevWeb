import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})

export class Signin {
  private service=inject(AuthService);
  private router=inject(Router);
  credentials={email:'',password:''};
  signIn(){
this.service.signin(this.credentials).subscribe(allowed =>{
  if (allowed){
    alert('Connexion réussie');
    this.router.navigate(['/destination']);
    console.log(this.credentials);
  }
  else {
   alert('Email ou mot de passe incorrect');
  }
}

)
 
  }
}
