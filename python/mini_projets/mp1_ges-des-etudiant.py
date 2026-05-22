class Etudiant:
    def __init__(self,nom,prenom,age,moyenne):
        self.nom=nom
        self.prenom=prenom
        self.age=age
        self.moyenne=moyenne
    def __str__(self):
      return f"l etudiant {self.nom} {self.prenom} qui a l'age {self.age} a la moyenne {self.moyenne} "  
class Les_Etudiants:
   def __init__(self):
    self.etudiant=[]
   nom=input("entrer le nom: ")  
   prenom=input("entrer le prenom: ") 
   age=int(input("entrer l'age: "))
   moyenne=float(input("entrer la moyenne:")) 
      
   def ajouter_etudiant(self):
         
         etudiant=Etudiant(self.nom,self.prenom,self.age,self.moyenne)
         self.etudiant.append(etudiant)
         print("etudiant ajouté")
         print(etudiant)
   def calculer_mension(self):
       if self.moyenne >= 16:
           return "Tres Bien" 
       elif self.moyenne >= 14:
           return"Bien"
       elif self.moyenne>= 12:
            return "Assez Bien"
       else:
           return"Passable"
   def afficher(self):
      
      try:
         if not self.etudiant:
           raise ValueError("aucun etudiant") 
         print("liste des etudiants:")
         for etud in self.etudiant:
            print(etud)
      except ValueError as e:
            print("❌", e)
               
etudiant1=Les_Etudiants() 
   
etudiant1.ajouter_etudiant() 
print(etudiant1.calculer_mension()) 
etudiant1.afficher() 