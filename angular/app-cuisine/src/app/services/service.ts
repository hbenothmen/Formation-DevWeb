import { Injectable, signal } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class Service{
    private recettesignal=signal<any[]>([{id:1,
      titre:"Blanquette",
      image:"assets/images/blanquette.png",
      ingredient:"1.6 kg Veau,400 g Carottes, 2 Oignon, 400 g Blanc de poireau, 250 g champignon,2 Jaunes d'œufs, 200 creme fraiche, 60 g farine"

    },
    {id:2,
      titre:"Gratin de courgettes",
      image:"assets/images/gratin.png",
      ingredient:"courgettes. courgettes 1 kg · Crème fraîche. Crème fraîche 250 g · Oeufs. Oeufs 3 · Beurre. Beurre 50 g · Gruyère. Gruyère 100 g"
    },
    {id:3,
        titre:"Couscous au boeuf et aux légumes à la tunisienne",
        image:"assets/images/couscous.png",
        ingredient:"1 kgBœuf,1 Os à moelle(s),7 Carotte(s), 6 Pomme(s) de terre,3 Courgette(s)3,3 Navet(s),1 Oignon(s),1 Poireau(x),1 Céleri,Concentré de tomate,Paprika,Sel poivre"
    },

]);
    private soupessignal=signal<any[]>([
        {id:1,
            name:"Soupe d'orge aux poulpes",
            image:"assets/images/soupe poulpe.png",
            ingredient:"l'huile, blé d'orge (tchich), 1 - poulpe coupée en morceaux, 1 boite de tomates concassées, 1 - oignon haché, pois chiches déjà trempés, 1 c. à café de cucuma, ail haché, céleri ciselé"
        },
        {id:2,
        name:"Soupe de légumes au poulet",
    image:"assets/images/soupe au ligume.png",
ingredient:"1 - blanc de poulet coupé en morceaux, 1 - oignon haché, carottes, courgettes, pommes de terre, persil ciselé, margarine, sel et poivre, tomates, curcuma"},
{id:3,
    name:"Chorba frik à la viande (Soupe au blé concassé)",
    image:"assets/images/soupe frik.png",
ingredient:"viande de bœuf, tomate concentrée, Chorba frik, pois chiches déjà trempés, 1 - oignon haché, ail haché, céleri haché, harissa arbi, 1 c. à café de tabel l'huile, sel et poivre"}
    ]);
    private platprincipale=signal<any[]>([
        {id:1,
      titre:"Blanquette",
      image:"assets/images/blanquette.png",
      ingredient:"1.6 kg Veau,400 g Carottes, 2 Oignon, 400 g Blanc de poireau, 250 g champignon,2 Jaunes d'œufs, 200 creme fraiche, 60 g farine"

    },
    {id:2,
      titre:"Gratin de courgettes",
      image:"assets/images/gratin.png",
      ingredient:"courgettes. courgettes 1 kg · Crème fraîche. Crème fraîche 250 g · Oeufs. Oeufs 3 · Beurre. Beurre 50 g · Gruyère. Gruyère 100 g"
    },
    {id:3,
        titre:"Couscous au boeuf et aux légumes à la tunisienne",
        image:"assets/images/couscous.png",
        ingredient:"1 kgBœuf,1 Os à moelle(s),7 Carotte(s), 6 Pomme(s) de terre,3 Courgette(s)3,3 Navet(s),1 Oignon(s),1 Poireau(x),1 Céleri,Concentré de tomate,Paprika,Sel poivre"
    }

    ]);
    readonly recettes=this.recettesignal.asReadonly(); 

 getRandomRecette() {
  const list = this.recettesignal(); // récupérer la liste
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

}

