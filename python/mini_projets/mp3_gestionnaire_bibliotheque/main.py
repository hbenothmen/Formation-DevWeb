
from gerer_livres import Gestionlivres
from gerer_utilisateurs import GestionUtilsateur

gestion_livre=Gestionlivres()
gestion_utilsateur=GestionUtilsateur()

gestion_livre.ajouter_livre("Les affaires des autres","Audrey Rechal")
gestion_livre.ajouter_livre("La belle matilda", "Florian")
gestion_livre.afficher_livre()

gestion_utilsateur.ajouter_utilisateur("amina","snoussi","amina@gmail.com")
gestion_utilsateur.afficher_utilisateur()