import { Component } from '@angular/core';
import { S22 } from '../s22/s22';
@Component({
  selector: 'app-s22-parent',
  imports: [S22],
  templateUrl: './s22-parent.html',
  styleUrl: './s22-parent.css',
})
export class S22Parent {
  m='salut c est un message de parent';
  waiting:string='waiting for child message..';
}
