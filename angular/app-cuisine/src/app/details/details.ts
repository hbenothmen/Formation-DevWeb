import { Component,inject } from '@angular/core';
import { Service } from '../services/service';
import { CommonModule } from '@angular/common';
import { RouterOutlet,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
    private mesrecettes = inject(Service);
  allrecettes = this.mesrecettes.recettes;

  private route = inject(ActivatedRoute);
  data = Number(this.route.snapshot.params['id']);

  details: any = null;

  recette() {
    for (let rec of this.allrecettes()) {
      if (rec.id == this.data) {
        this.details = rec;
        return;
      }
    }
    this.details = null;
  }

  constructor() {
    this.recette();
  }
}