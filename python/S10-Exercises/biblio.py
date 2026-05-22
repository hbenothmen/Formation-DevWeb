from bs4 import BeautifulSoup
import json
import requests
url="https://www.tunisianet.com.tn/301-pc-portable-tunisie"
response=requests.get(url)
s=BeautifulSoup(response.text,"html.parser")
resultat=s.find_all("h2", class_="h3 product-title")
products=[]
for i in resultat:
    titre= i.get_text(strip=True)
    print(titre)
    #products.append(titre)
    products.append({"titre":titre})

with open("product.json", "w") as f:
        json.dump(products,f, indent=4)
   