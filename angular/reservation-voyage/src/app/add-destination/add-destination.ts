import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { NgForm,FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-destination',
  imports: [FormsModule],
  templateUrl: './add-destination.html',
  styleUrl: './add-destination.css',
})
export class AddDestination {
  private destservice=inject(DestinationService);
private authservice=inject(AuthService);
private router=inject(Router);
  destination:any[]=[];
ngOnInit(){
  this.destservice.readDest().subscribe((data:any)=>{
    this.destination=data;
  });   
}
  addDest(form:NgForm){
  this.destservice.createDest(form.value).subscribe((data:any)=>{
    console.log(data);
    this.destination.push(data);
  });}

  logout(){
  this.authservice.logout();
  this.router.navigate(['/ ']);
}
}
