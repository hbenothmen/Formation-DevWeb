from datetime import datetime

class RendezVous:

    def __init__(self, titre, date_rdv):

        self.titre = titre
        self.date_rdv = date_rdv

    def ajouter_rdv(self):
       
        self.rdv = datetime.strptime(self.date_rdv,"%d/%m/%Y")
        return  self.rdv
    def nombre_jours(self):
       self.aujourdhuit = datetime.now()
       self.diff_jour = self.rdv - self.aujourdhuit
       return self.diff_jour.days
    
    def afficher(self):
      print("la date du jour est: ", self.aujourdhuit)
      print(f"Votre {titre} est le {date_rdv}")
      print(f" il vous reste {self.diff_jour.days} jours")

titre=input("entrer le titre de rendez vous: ")
date_rdv=input("entrer une date pour votre rendez vous (jj/mm/aaaa):")

rd=RendezVous(titre,date_rdv)
rd.ajouter_rdv()
rd.nombre_jours()
rd.afficher()


