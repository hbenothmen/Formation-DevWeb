import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { NgForm,FormsModule } from '@angular/forms';
@Component({
  selector: 'app-suprimer-destination',
  imports: [FormsModule],
  templateUrl: './suprimer-destination.html',
  styleUrl: './suprimer-destination.css',
})
export class SuprimerDestination {
  private destService=inject(DestinationService);
  voyage:any[]=[];
destinationid:string='';
  ngOnInit(){
    this.destService.readDest().subscribe(v=>{
      this.voyage=v;
    }); 
  }
  supDest(form:NgForm){
    if (form.invalid) return;
    this.destService.deleteDes(this.destinationid).subscribe(()=>{
      this.voyage=this.voyage.filter(v=>v.id!==this.destinationid)
    form.reset();
    })
  }
}
