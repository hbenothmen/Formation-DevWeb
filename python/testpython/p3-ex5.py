class Etudiant:
    def __init__(self,nom,prenom,note):
      self.nom=nom
      self.prenom=prenom
      self.note=note
    def afficher(self):
      print (f"Nom: {self.nom} | Prenom:{self.prenom} | Note: {self.note}")

    def est_admis(self):
       if self.note >= 10:
          return True
       else:
          return False
e1=Etudiant("Ali","Ben Salah",14)
e1.afficher()
print(e1.est_admis())