class Etudiant:
    def __init__(self,nom,prenom,note):
      self.nom=nom
      self.prenom=prenom
      self.note=note
def afficher(self):
   return f"{self.nom} {self.prenom} a l'age {self.age}"

e1=Etudiant("Ali","Ben Salah",14)
print(e1.afficher())