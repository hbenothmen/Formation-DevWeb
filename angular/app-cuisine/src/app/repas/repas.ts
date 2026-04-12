import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Service } from '../services/service';
@Component({
  selector: 'app-repas',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './repas.html',
  styleUrl: './repas.css',
})

export class Repas {
  constructor(private service: Service) {}
  // private repas=inject(Service);
  // allrepas=this.repas.recettes;

  days: number[] = [];
meals: { [key: number]: string } = {};
selectedDay!: number;

ngOnInit() {
  this.days = Array.from({ length: 30 }, (_, i) => i + 1);
}

selectDay(day: number) {
  this.selectedDay = day;

}
 randomRepas() {
  if (this.selectedDay) {
    const recette = this.service.getRandomRecette();
    this.meals[this.selectedDay] = recette.titre;
   
  }
}
updateCalender(){
   if (this.selectedDay) {
    delete this.meals[this.selectedDay];
}
}
}
