from bs4 import BeautifulSoup
import requests
import json
url="https://respire.co/collections/visage"
response=requests.get(url)
# print(response.status_code)
# print(response.text)
soup=BeautifulSoup(response.text, "html.parser")
result=soup.find_all("h2", class_="text-13/narrow" )
result2=soup.find_all("div",class_="text-13")
soinvisage=[]
for x in result:
 
 soinvisage.append(x.text)
print(soinvisage)

with open("Soinvisage.json","w") as fjson:
 json.dump(soinvisage,fjson, indent=4)
