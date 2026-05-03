import { Component, signal,inject } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
private authService=inject(AuthService);
private route=inject(Router);
  protected readonly title = signal('reservation-voyage');
  logout(){
    this.authService.logout();
    this.route.navigate(['/']);

  }

}
