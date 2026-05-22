import json
with open("etudiants.json","w") as fw:
    data=[
        {"nom":"ahmad", "prenom":"samti","age":23, "moyenne":15},
        {"nom":"mariem", "prenom":"afli","age":26, "moyenne":17}
        ]
    json.dump(data, fw, indent=4)
# with open("etudiants.json","a") as fw:
#     json.dump([{"nom":"ali","prenom":"sassi","age":25,"moyenne":12}], fw, indent=4)
with open("etudiants.json", "r") as fr:
    data=json.load(fr)
    print(data)