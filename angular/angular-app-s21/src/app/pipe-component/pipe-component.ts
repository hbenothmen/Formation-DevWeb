import { Component } from '@angular/core';
import { CustomPipe } from '../pipe/custom.pipe';
import { RouterOutlet} from '@angular/router';
import { ReversePipe } from '../pipe/reverse.pipe';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pipe-component',
  imports: [RouterOutlet,ReversePipe,CustomPipe,CommonModule],
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css',
})
export class PipeComponent {
   today = new Date();
  price =150;
  user={
    name:'ALI',
    date:'1989/05/15',
    email:'ali@exmple.com',
    isActive:true
  }
}
