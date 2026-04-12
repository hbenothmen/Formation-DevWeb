import { Component,inject } from '@angular/core';
import { Service } from '../services/service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, } from '@angular/router';
@Component({
  selector: 'app-recettes',
  imports: [CommonModule, RouterOutlet,RouterLink],
  templateUrl: './recettes.html',
  styleUrl: './recettes.css',
})
export class Recettes {
  private mesrecettes=inject(Service);//make a copy of service1
  allrecettes=this.mesrecettes.recettes;//get all tasks from service1
 
}
