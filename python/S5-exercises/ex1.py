class CompteBancaire:
    def __init__(self,nom,solde):
        self.nom=nom
        self.solde=solde
    def  afficher_solde(self):
        print("solde:",self.solde)
    def deposer(self,montant):
       self.solde=self.solde+montant
       return self.solde
    def retirer(self,montant):
       self.solde=self.solde-montant
       return self.solde

c1=CompteBancaire("ahmad",5000)
print(f"le client {c1.nom} a {c1.solde} dinars")
c1.afficher_solde()
print ("le montant deposé est:", c1.deposer(1000))
print ("le montant retiré est:", c1.retirer(200))
c1.afficher_solde()