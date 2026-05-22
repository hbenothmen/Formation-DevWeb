import csv
with open ("produits.csv","w",newline="") as p:
    pr=["nom","prix","quantite"]
    produit=csv.DictWriter(p, fieldnames=pr)
    produit.writeheader()
    produit.writerow({"nom":"Lancome", "prix":300, "quantite":5})
    produit.writerow({"nom":"Chanel", "prix":250, "quantite":10})
    produit.writerow({"nom":"versage","prix":320, "quantite":6})

                     