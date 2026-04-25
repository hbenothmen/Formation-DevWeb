import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NgForm,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modifier-dest',
  imports: [FormsModule],
  templateUrl: './modifier-dest.html',
  styleUrl: './modifier-dest.css',
})
export class ModifierDest {
  private service=inject(DestinationService);
  //  private route=inject(ActivatedRoute);
  // private destid=this.route.snapshot.params['id'];
  
 
  // ngOnInit(){
  //   this.service.readDest().subscribe((d:any)=>{
  //     this.destination=d;
  //   })
  // }

  destination: any = {
  id: '',
  destination: '',
  pays: '',
  prix:'',
  image:'',
  disponible:''
};

voyage: any[] = [];

modifierDest(form: NgForm) {

  if (form.invalid) return;

  const id = this.destination.id;

  this.service.updateDest(id, this.destination)
    .subscribe((updated: any) => {

      // 🔥 mise à jour locale
      this.voyage = this.voyage.map(v =>
        v.id == id ? updated : v
      );

      // 🔥 reset formulaire
      form.reset();

    });
}
}
  


