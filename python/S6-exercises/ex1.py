class Employe:
    def __init__(self,nom,salaire_base):
        self.nom=nom
        self.salaire_base=salaire_base
    def afficher_salaire(self):
        print("le salaire de base de cette employe est:",self.salaire_base)
class Manager(Employe):
    def __init__(self, nom, salaire_base,prime):
        super().__init__(nom, salaire_base)
        self.prime=prime        
    def afficher_salaire(self):
        return self.salaire_base+self.prime
class Developpeur(Employe):
    def __init__(self,nom,salaire_base,langage):
        super().__init__(nom,salaire_base)
        self.langage=langage
    def coder(self):
        print(f"{self.nom} est un developpeur {self.langage}") 
e1=Employe("IMEN",800) 
m1=Manager("Sami",1000,500)    
d1=Developpeur("Hafiza",1000,"Python")      
print("####Employe details####")
print(f"l'employe {e1.nom} a comme salaire de base {e1.salaire_base}")
e1.afficher_salaire()
print("####Manager####")
print(m1.afficher_salaire())
print("####Developpeur####")
d1.afficher_salaire()
d1.coder()