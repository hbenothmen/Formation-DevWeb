import { Component,inject } from '@angular/core';
import { DestinationService } from '../services/destination.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-reservation',
  imports: [NgClass],
  templateUrl: './reservation.html',
  styleUrl: './reservation.css',
})
export class Reservation {
    private route = inject(ActivatedRoute);
  private service = inject(DestinationService);

  voyage: any={};

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.getVoyageById(id!).subscribe(data => {
      this.voyage = data;
    });
  }

  reserver() {
    if (this.voyage.disponible) {

      this.service.updateVoyage(this.voyage.id, {
        disponible: false
      }).subscribe(() => {

        this.voyage.disponible = false;
        alert("✅ Réservation confirmée");

      });

    } else {
      alert("❌ Voyage non disponible");
    }
  }
}

