import { Component,signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-s20',
  imports: [NgClass,CommonModule],
  templateUrl: './s20.html',
  styleUrl: './s20.css',
})
export class S20 {
  user={
    islogin:false,
    ispinding:true
  }
  admins=['takwa', 'houssine','nasim','khaled']
  isadmin=signal(false)
  age=signal(17);
}
