import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { NgForm,FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-add-destination',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-destination.html',
  styleUrl: './add-destination.css',
})
export class AddDestination {
  private destservice=inject(DestinationService);
private authservice=inject(AuthService);
private router=inject(Router);
  destination:any[]=[];
  selectedImage:any;
  imagePath:string='';
ngOnInit(){
  this.destservice.readDest().subscribe((data:any)=>{
    this.destination=data;
  });   
}
  addDest(form:NgForm){
    const voyage={
      id:form.value.id,
      destination:form.value.destination,
      pays: form.value.pays,
      prix: form.value.prix,
       image: this.imagePath, // ✔ remplacer fakepath
    disponible: form.value.disponible

    }
  this.destservice.createDest(voyage).subscribe((data:any)=>{
    console.log(data);
    this.destination.push(data);
    form.reset();
  });}

  logout(){
  this.authservice.logout();
  this.router.navigate(['/ ']);
}

onFileSelected(event: any){
  const file=event.target.files[0];
  if (file){
    this.selectedImage=file;
    console.log("Image selectionnee:",file.name);
  this.imagePath='assets/images/' +file.name;
  }
}
}
