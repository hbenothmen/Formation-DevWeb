import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fname:string="";
  lname:string="";
  email:string="";
  phone:number=0;
imageUrl="https://static.vecteezy.com/system/resources/thumbnails/048/747/985/small/a-young-woman-with-long-brown-hair-is-wearing-a-black-blazer-and-white-shirt-looking-directly-at-the-camera-photo.jpg";
  
 /*imageUrl="C:\Users\benot\devweb\angular\angular-ex1\src\assets\images\profile.jpg";*/
  protected readonly title = signal('angular-ex1');
}
