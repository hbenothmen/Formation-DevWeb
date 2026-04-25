import { Component,inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})

export class AddUser {
  private destService=inject(DestinationService);

  user:any=[];
 addUser(form:NgForm){
    return this.destService.createUser(form.value).subscribe((u:any)=>{
      console.log(u);
      
    this.user.push(u);
   form.reset();
    }); 


  }
//    logout(){
//   this.authservice.logout();
//   this.router.navigate(['/signin']);
// }
}
