import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin',
  standalone:true,
  imports: [FormsModule, RouterLink, RouterOutlet],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {

 
  
}
