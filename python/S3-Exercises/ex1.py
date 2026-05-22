# livre1=["mathematique","Newton",1970]
# livre2=["science","ali",1980]
# livre3=["filosophie","sokrat",1960]
# print("livre1:",livre1)
# print("livre2:",livre2)
# print("livre3:",livre3)
# livre2[2]=1960
# print("livre2 updated:",livre2)
#livre1={"titre":"Mathematique","auteur":"Newton","annee":1970}
#livre2={"titre":"Science","auteur":"John George","annee":1980}
livre={"titre":"Filosophie","auteur":"Sokrat","annee":1960}
print(livre)
livre["annee"]=1956
print("livre updated:",livre)
livre["pages"]=700
print(livre)
A={1, 8, 9, "f", "c"}
B={5, 0, "f", "k", 3, 6, 7, 1}
print("A|B =>", A|B)
print("B|A =>", B|A)
print("A&B =>", A&B)
print("B&A =>", B&A)