import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm,FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-modifier-dest',
  imports: [RouterLink,FormsModule],
  templateUrl: './modifier-dest.html',
  styleUrl: './modifier-dest.css',
})
export class ModifierDest {
  private service=inject(DestinationService);
 
  destination: any = {
  id: '',
  destination: '',
  pays: '',
  prix:'',
  image:'',
  disponible:''
};
voyage:any[]=[];
imagePath:string="";
selectedImage: any;
modifierDest(form: NgForm) {

  if (form.invalid) return;

  const id = this.destination.id;
const updateVoyage={
   id:this.destination.id,
      destination:this.destination.destination,
      pays: this.destination.pays,
      prix: this.destination.prix,
       image: this.imagePath||this.destination.imagePath, 
    disponible: this.destination.disponible

}
  this.service.updateDest(id, updateVoyage)
    .subscribe((updated: any) => {

      //  mise à jour locale
      this.voyage = this.voyage.map(v =>
        v.id == id ? updated : v
      );

      //  reset formulaire
      form.reset();

    });
}
//////
//  destination: any = {
//   id: '',
//   destination: '',
//   pays: '',
//   prix:'',
//   image:'',
//   disponible:''
// };

// voyage: any[] = [];

// modifierDest(form: NgForm) {

//   if (form.invalid) return;

//   const id = this.destination.id;

//   this.service.updateDest(id, this.destination)
//     .subscribe((updated: any) => {

//       //  mise à jour locale
//       this.voyage = this.voyage.map(v =>
//         v.id == id ? updated : v
//       );

//       //  reset formulaire
//       form.reset();

//     });
// }
onFileSelected(event:any){
  const file=event.target.files[0];
  if(file){
    this.selectedImage=file;
    this.imagePath='assets/images/'+file.name;
  this.destination.image=this.imagePath;
  }
}
}
  


