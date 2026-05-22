class Livre:#cette classe sert à représenter un objet
    def __init__(self,titre,auteur,isbn): # Constructeur de la classe
        self.titre=titre
        self.auteur=auteur
        self.isbn=isbn
        
    # def afficher(self):
    #     print(f"{self.titre} est ecrit par {self.autheur} ")   
    def __str__(self): #pour afficher un objet proprement avec print()
      return f" Le livre {self.titre} est ecrit par {self.auteur} "  
    
# livre1=Livre("Le petit prince","Antoine","A1234",2001)    
# livre1.afficher()
# print(livre1)
class Les_livres: #cette classe va contenir plusieurs livres
   def __init__(self):
      self.livres=[] # Création d’une liste vide pour stocker les livres
   def ajouter_livre(self,titre,auteur,isbn):
       try:
           livre=Livre(titre,auteur,isbn)
           self.livres.append(livre)
           print("livre ajouté")
       except Exception as e:
           print("erreur au moment de l'ajout:", e) 

   def supprimer_livre(self,titre):
       try:
           for livre in self.livres: #parcourt tt les livres
            if livre.titre.lower() == titre.lower():
             self.livres.remove(livre)
             print("le livre est supprimé")
             return #Arrête la fonction après suppression
           raise ValueError("Livre introuvable.") #Génère une erreur personnalisée si le livre n’existe pas.
       except ValueError as e:
          print("attention", e)
   
   def rechercher_livre(self,titre):
      try:
         for livre in self.livres:
            if livre.titre.lower()==  titre.lower():
               print("livre existe") 
               print(livre)
               return  
         raise ValueError ("Livre non trouvé") 
      
      except ValueError as e:
        print("Attention!",e)
   def afficher_livres(self):
      try:
         if not self.livres:
           raise ValueError("aucun livre dans la bibliothéque") 
         print("liste des livres:")
         for livre in self.livres:
            print(livre)
      except ValueError as e:
            print("❌", e)
##programme principale 
meslivres=Les_livres()  
while True:
         print("\n=====menu======")
         print("1. Ajouter un livre")
         print("2. Supprimer un livre")
         print("3. Rechercher un livre")
         print("4. Afficher tous les livres")
         print("5.Quiter")

         choix = input("choisissez une option: ")

         match choix:
             case "1":
                 titre=input("Titre du livre: ")
                 auteur=input("Auteur du livre: ")
                 isbn=input ("le ISBN du livre: ")
                
                 meslivres.ajouter_livre(titre,auteur,isbn)
             
             case "2":
                 titre=input("titre du livre á supprimer")
                 meslivres.supprimer_livre(titre)
             case "3":
                 titre=input("Titre du livre a rechercher: ")
                 meslivres.rechercher_livre(titre)
             case "4" :
                 meslivres.afficher_livres()   
             case "5" :   
                 print("fin de programme") 
                 break  
             case _:
                 print("option invalid")
