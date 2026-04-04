import { Component,computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   imageUrl='https://www.leconomistemaghrebin.com/wp-content/uploads/2021/12/cine.jpg';
  // imageUrl='src/assets/cine.png';
  introduction="Wilcome to Ciné Pulse";
   movies=signal([
    { id:1,
      title:'Projet dernière chance',
      year:2026,
      image:'https://media.senscritique.com/media/000023606104/0/projet_derniere_chance.png',
    description:'Titre original	Project: Hail Mary,Réalisation:	Phil Lord Christopher Miller,Scénario	Drew Goddard Musque	Daniel Pemberton,Acteurs princiaux:	Ryan Gosling, Sandra Hüller, Milana Vayntrub, Sociétés de production	Metro-Goldwyn-Mayer'

    },

    {id:2,
      title:'The Drama',
      year:2026,
image:'https://media.senscritique.com/media/000023556068/0/the_drama.png',
description:'Titre original	Project: Hail Mary,Réalisation:	Phil Lord Christopher Miller,Scénario	Drew Goddard Musque	Daniel Pemberton,Acteurs princiaux:	Ryan Gosling, Sandra Hüller, Milana Vayntrub, Sociétés de production	Metro-Goldwyn-Mayer'

    },

    {id:3,
      title:'Plus fort que moi',
      year:2026,
image:'https://media.senscritique.com/media/000023612562/0/plus_fort_que_moi.png',
description:'Titre original	Project: Hail Mary,Réalisation:	Phil Lord Christopher Miller,Scénario	Drew Goddard Musque	Daniel Pemberton,Acteurs princiaux:	Ryan Gosling, Sandra Hüller, Milana Vayntrub, Sociétés de production	Metro-Goldwyn-Mayer'
    },
    {id:4,
      title:'My Fault: London',
      year:2025,
image:'https://upload.wikimedia.org/wikipedia/en/2/26/My_Fault_-_London.jpg',
description:'Titre original	Project: Hail Mary,Réalisation:	Phil Lord Christopher Miller,Scénario	Drew Goddard Musque	Daniel Pemberton,Acteurs princiaux:	Ryan Gosling, Sandra Hüller, Milana Vayntrub, Sociétés de production	Metro-Goldwyn-Mayer'
    },
    {id:5,
      title:'Wake up dead man',
      year:2025,
image:'https://upload.wikimedia.org/wikipedia/en/d/d9/WakeUpDeadMan_poster.jpg',
description:'Titre original	Project: Hail Mary,Réalisation:	Phil Lord Christopher Miller,Scénario	Drew Goddard Musque	Daniel Pemberton,Acteurs princiaux:	Ryan Gosling, Sandra Hüller, Milana Vayntrub, Sociétés de production	Metro-Goldwyn-Mayer'
    },
    {id:6,
      title:'The History of Sound',
      year:2025,
image:'https://m.media-amazon.com/images/I/51f4QLlEesL._SL500_.jpg',
description:'Titre original	Project: Hail Mary,Réalisation:	Phil Lord Christopher Miller,Scénario	Drew Goddard Musque	Daniel Pemberton,Acteurs princiaux:	Ryan Gosling, Sandra Hüller, Milana Vayntrub, Sociétés de production	Metro-Goldwyn-Mayer'

    },
     {id:7,
       title:'Killers of the Flower Moon',
      year:2023,
image:'https://resizing.flixster.com/Nkywr3qkAo-G089ObPt_kqxPCkE=/206x305/v2/https://resizing.flixster.com/GGQKtXozu58SHWKH0Cz-5jQ9U38=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzZhOWE1N2ZkLTY4MzgtNDA3Yi05MDEwLWQzN2QwMTFkZDdmNS5qcGc=',
description:'Killers of the Flower Moon is a sobering appraisal of Americas relationship with Indigenous peoples and yet another artistic zenith for Martin Scorsese and his collaborators'
    },
    {id:8,
      title:'99 Francs',
      year:2007,
image:'https://m.media-amazon.com/images/M/MV5BYzNhZGY2NDUtOWFmNi00MWZjLWI2MDktY2M2Nzk5YWY3N2VjXkEyXkFqcGc@._V1_SY278_CR12,0,184,278_.jpg',
description:'The life of Octave Parango, a flamboyant ad designer, filled with success, satire, misery and love.'
    },
    {id:9,
      title:'CRIME 101',
      year:2026,
image:'https://upload.wikimedia.org/wikipedia/en/2/29/Crime_101_%282026_film%29_poster.jpg',
description:'CRIME 101 weaves the tale of an elusive thief (Chris Hemsworth) whose high-stakes heists unfolding along the iconic 101 freeway have mystified police. When he eyes the score of a lifetime with hopes of this being his final job, his path collides with a disillusioned insurance broker (Halle Berry) who is facing her own crossroads, forcing the two to collaborate. Determined to crack the case, a relentless detective (Mark Ruffalo) closes in on the operation, raising the stakes even higher. As the multimillion-dollar heist approaches, the line between hunter and hunted begins to blur, and all three are forced to confront the cost of their choices - and the realization that there is no turning back.'

    },
    {id:10,
      title:'Marty Supreme',
      year:2026,
image:'https://media.senscritique.com/media/000023434233/300/marty_supreme.png',
description:'Genres : Drame, Biopic, Sport, origine: États-Unis, Marty Mauser, un jeune homme à l’ambition démesurée, est prêt à tout pour réaliser son rêve et prouver au monde entier que rien ne lui est impossible.'
    }
  ])
//  Stockage du mot-clé de recherche
  searchTerm = signal('');
  //Signal calculé qui réagit automatiquement aux changements
  filteredMovies = computed(() => {
    const term = this.searchTerm().toLowerCase();
// Si pas de recherche, on retourne tout
   // if (!term) return this.movies();
   // si pas de recherche, on retourne rien
 if (!term) return null;
    // Sinon, on filtre sur le titre
    return this.movies().filter(movie => 
      movie.title.toLowerCase().includes(term)
    );
  });
  // Méthode pour mettre à jour le signal de recherche
  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
 
