import { Component,inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private authServ=inject(AuthService);
  userList:any[]=[];
  createUser(form:NgForm){
if(form.invalid) return;
this.authServ.signup(form.value).subscribe({
next:(response)=>{
  console.log("User cree:",response);
  this.userList.push(response);
  form.reset();
},
error: (err) =>{
  console.error("Signup failed:",err);
  alert("Signup failed");
}
})
  }

}
