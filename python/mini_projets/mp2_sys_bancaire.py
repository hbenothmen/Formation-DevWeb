class Compte:
    def __init__(self,compte_number,titulaire,solde):
        self.compte_number=compte_number
        self.titulaire=titulaire
        self.solde=solde
    def afficher_solde(self):
      print(f"Le titulaire {self.titulaire} a un solde de {self.solde}$")
    def deposer(self,montant):
        self.solde= self.solde + montant
        print(f"Le titulaire {self.titulaire} a un nouveau solde de {self.solde}$")
    def retrait_argent(self, montant):
        if montant<=self.solde:
         self.solde-= montant
         print(f"Le solde du titulaire {self.titulaire} apres retrait est {self.solde}$") 
        else:
         print("solde insuffisant") 
class Compte_Courant(Compte):
   def __init__(self,compte_number,titulaire,solde):
           super().__init__(compte_number,titulaire,solde)
class Compte_Epargne(Compte):
    def __init__(self,compte_number,titulaire,solde, taux):
        super().__init__(compte_number,titulaire,solde)
        self.taux=taux
    def calculer_interet(self):
         interet=self.solde * self.taux
         print("Interet:", interet)
         self.solde+=interet
         print("New solde:",self.solde)

ce=Compte_Epargne("AA123445","Ali", 1000,0.5)
ce.afficher_solde()
ce.deposer(500)
ce.retrait_argent(400)
ce.calculer_interet()