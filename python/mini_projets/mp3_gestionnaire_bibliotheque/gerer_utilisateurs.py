class Utilisateur:
    def __init__(self,nom,prenom,email):
        self.nom=nom
        self.prenom=prenom
        self.email=email
    def __str__(self):
        return f"L'utilisateur {self.nom} {self.prenom} a l email '{self.email}'"
class GestionUtilsateur:
    def __init__(self):
        self.utilisateur=[]
    def ajouter_utilisateur(self,nom,prenom,email):
        utilisateur=Utilisateur(nom,prenom,email)
        self.utilisateur.append(utilisateur)
        print("utilisateur ajouté")
    def afficher_utilisateur(self):
        if len(self.utilisateur)==0:
            print("il n'y a aucun utilisateur ")
        else:
            print("Liste des utilisateurs")
            for utilisateur in self.utilisateur:
                print(utilisateur)
