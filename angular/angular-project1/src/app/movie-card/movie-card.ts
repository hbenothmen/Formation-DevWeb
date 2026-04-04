import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-movie-card',
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  films=[
    { id:1,
      title:'Projet dernière chance',
      year:2026,
      image:'https://media.senscritique.com/media/000023606104/0/projet_derniere_chance.png'
    },

    {id:2,
      title:'The Drama',
      year:2026,
image:'https://media.senscritique.com/media/000023556068/0/the_drama.png'

    },

    {id:3,
      title:'Plus fort que moi',
      year:2026,
image:'https://media.senscritique.com/media/000023612562/0/plus_fort_que_moi.png'

    },
    {id:4,
      title:'My Fault: London',
      year:2025,
image:'https://upload.wikimedia.org/wikipedia/en/2/26/My_Fault_-_London.jpg'

    },
    {id:5,
      title:'Wake up dead man',
      year:2025,
image:'https://upload.wikimedia.org/wikipedia/en/d/d9/WakeUpDeadMan_poster.jpg'

    },
    {id:6,
      title:'The History of Sound',
      year:2025,
image:'https://m.media-amazon.com/images/I/51f4QLlEesL._SL500_.jpg'

    },
     {id:7,
      title:'Killers of the Flower Moon',
      year:2023,
image:'https://resizing.flixster.com/Nkywr3qkAo-G089ObPt_kqxPCkE=/206x305/v2/https://resizing.flixster.com/GGQKtXozu58SHWKH0Cz-5jQ9U38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOWE1N2ZkLTY4MzgtNDA3Yi05MDEwLWQzN2QwMTFkZDdmNS5qcGc='

    },
    {id:8,
      title:'99 Francs',
      year:2007,
image:'https://m.media-amazon.com/images/M/MV5BYzNhZGY2NDUtOWFmNi00MWZjLWI2MDktY2M2Nzk5YWY3N2VjXkEyXkFqcGc@._V1_SY278_CR12,0,184,278_.jpg'

    },
    {id:9,
      title:'CRIME 101',
      year:2026,
image:'https://upload.wikimedia.org/wikipedia/en/2/29/Crime_101_%282026_film%29_poster.jpg'

    },
    {id:10,
      title:'Marty Supreme',
      year:2026,
image:'https://media.senscritique.com/media/000023434233/300/marty_supreme.png',

    }
  ]
}
