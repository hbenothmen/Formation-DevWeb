import json
with open ("contact.json","r", encoding="utf8") as f:
   try:
      contact=json.load(f)
   except:
      contact=[]

nom=input("Enter un nom: ")
phone=input("Enter le numero de telephone: ") 

contact.append({"Nom":nom,
                 "Phone":phone})
with open("contact.json", "w",encoding="utf8") as f:
   json.dump(contact,f, indent=4 ,ensure_ascii=False)

print("liste des contact:")
for c in contact:
   print(f"Nom:{c['Nom']} | Telephone: {c['Phone']}")
