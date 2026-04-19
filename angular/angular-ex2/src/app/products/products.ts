import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
 products = [
    {
      id: 1,
      name: 'La creme soyeuse',
      price: '25$',
      image: 'https://floraison.bio/cdn/shop/files/16SerumPeelingAHA_LaCremeSoyeuse_1.jpg?',
      description: 'Un nouveau souffle pour votre peau'
    },
    {
      id: 3,
      name: 'Perfume',
      price: '60$',
      image: 'https://m.media-amazon.com/images/I/81DkDGQaHwL._AC_SX522_.jpg',
      description: 'Sanderling shine for women 100ml - yves de sistelle style'
    },
    {
      id: 2,
      name: 'Face Cream',
      price: '50$',
      //image: "C:/Users/benot/devweb/angular/angular-ex2/src/assets/images/creme.png ",
      image:'https://www.cerave.com.au/-/media/project/loreal/brand-sites/cerave/americas/au/pdp-packshot-images/oil-control-lg.webp?rev=-1?',
      description: 'Hydrating face cream'
    }
    
  ];
 
}