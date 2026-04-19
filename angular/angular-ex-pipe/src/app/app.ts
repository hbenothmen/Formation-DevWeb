import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UpperCasePipe,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 name:string=" ";
  protected readonly title = signal('angular-ex-pipe');

}
