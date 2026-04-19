import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Lifecycle } from './lifecycle/lifecycle';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,Lifecycle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  mynumber=0;
isvisible=signal(true);
isadmin=signal(false);
increment(){
  this.mynumber++;
}
toggle(){
  this.isvisible.update(v=>!v);
}
  protected readonly title = signal('angular-app-s21');
}
