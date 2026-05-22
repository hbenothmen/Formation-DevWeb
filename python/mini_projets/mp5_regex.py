import re
email=input("Entrer un addresse email: ")
pattern=r"^[\w.-]+@[\w.-]+\.\D+$"
if re.search(pattern,email):
    print("email valid")
else:
    print("email non valid")
    #################
telephone=input("Entrer un numero de telephone")
pat=r"^00216\d{8}"
resultat=re.search(pat,telephone)
if resultat:
    print("numero valide")
else:
    print("le numero est invalide")
    ###########
password=input("Entrer un password")
pattern=r"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%&*])[a-zA-Z0-9!@$%&*]{8,}"
result=re.search(pattern,password)
if result:
    print("mot de passe valide")
else:
    print("mot de passe invalid")