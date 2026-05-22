class Livre:
    def __init__(self,titre,auteur):
        self.titre=titre
        self.auteur=auteur
    def __str__(self):
     return f"le livre '{self.titre}' est ecrit par '{self.auteur}'"
class Gestionlivres:
 def __init__(self):
  self.livre=[]
 def ajouter_livre(self,titre,auteur):
    livre=Livre(titre,auteur)
    self.livre.append(livre)
    print("livre ajouté")
 def afficher_livre(self):
   if len(self.livre)==0:
      print("il n y a aucun livre")
   else:
     print("Liste des livres: ") 
     for livre in self.livre:
      print(livre)