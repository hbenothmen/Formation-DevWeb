class Personne:
    def __init__(self, nom, age):
     self.nom=nom
     self.age=age
    def afficher(self): 
     print(f"Cette personne a le nom {self.nom} et elle a {self.age} ans.")
per=Personne("Mohamed", 30) 
per.afficher()