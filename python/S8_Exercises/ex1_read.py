import csv
import json
totalproduit=[]
with open("produits.csv","r") as p:
    produitreader=csv.DictReader(p)
    for r in produitreader:
     total=float(r["prix"])  * float(r["quantite"]) 
     print(f"Le total prix de {r["nom"]} est:", total)
     totalproduit.append({"nom":r["nom"],"total":total})

with open("totaux.json","w") as pjson:
       
       json.dump(totalproduit,pjson)
print(totalproduit)
  