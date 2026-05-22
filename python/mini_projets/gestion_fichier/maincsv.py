import csv
# with open("etudiants.csv","w") as fw:
#     header=["nom","prenom","age","moyenne"]
#     ecrit=csv.DictWriter(fw,fieldnames=header)
#     ecrit.writeheader()
#     ecrit.writerow({"nom":"aymen","prenom":"salhi","age":27,"moyenne":16})
#     ecrit.writerow({"nom":"sara","prenom":"aouadi","age":30,"moyenne":18})
#     ecrit.writerow({"nom":"amal","prenom":"ahmadi","age":23,"moyenne":14})

with open("etudiants.csv","r") as fr:
     lire=csv.DictReader(fr)
     for ligne in lire:
         print(ligne["nom"],"|",ligne["prenom"],"|",ligne["age"],"|",ligne["moyenne"])
#####ajouter sans supprimer le contenu existant
with open("etudiants.csv","a", newline="") as f:
    wiriter=csv.writer(f)
    wiriter.writerow(["sana","wali",23,12])