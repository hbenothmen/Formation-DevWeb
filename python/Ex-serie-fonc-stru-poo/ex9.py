#classes et objets
class Voiture:
    def __init__(self,marque,couleur,vitesse):
        self.marque=marque
        self.couleur=couleur
        self.vitesse=vitesse
    def afficher_info(self):
        print(f"cette voiture a comme marque {self.marque}, sa couleur est {self.couleur} et sa vitesse est de {self.vitesse} km/h ")
    def accelerer(self,n):
        self.vitesse+=n
v1=Voiture("bmw","rouge",20)
v2=Voiture("golf","bleu",15)
v1.afficher_info()
v2.afficher_info()
v1.accelerer(5)
v2.accelerer(8)
print("##### affichage apres acceleration #####")
v1.afficher_info()
v2.afficher_info()
