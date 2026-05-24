import requests
url="https://fakestoreapi.com/products"
response=requests.get(url)
data=response.json()
prod_rechercher=input("entrer le nom de produit:").lower()
produits=[]
for produit in data:
    nom_prod=produit["title"]
    if prod_rechercher in nom_prod.lower():
        produits.append(produit)
if len(produits)==0:
    print("aucun produit trouvé")
else:
    for i in produits:
        print("nom de produit: ",i["title"])
#le produit moins cher
moins_cher=produits[0]
for p in produits:
    print("produit_name: ",i["title"])
    if p["price"]<moins_cher["price"]:
      moins_cher=p
print("\nle produit le moin cher:\n") 
print("nom: ",moins_cher["title"]) 
print("prix:" ,moins_cher["price"])
