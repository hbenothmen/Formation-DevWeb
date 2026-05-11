class CompteBancaire:
    def __init__(self,titulaire,solde):
     self.titulaire=titulaire
     self.solde=solde
    def deposer(self,montant):
       self.solde=self.solde + montant
       print(f"le solde de Mr {self.titulaire} devient",self.solde)
    def retirer(self,montant):
        self.solde= self.solde - montant
        print (f"le solde de titulaire {self.titulaire} apres la derniere operation est",self.solde)
    def afficher(self):
       print(f"Le titulaire {self.titulaire} a un solde de {self.solde} dinars")   
cb1= CompteBancaire("Ali ben Salah",5000)
cb1.afficher()
cb1.deposer(1500)
cb1.retirer(500)
cb1.afficher()