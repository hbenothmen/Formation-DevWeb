#ensembles
A={1,2,3,4,5}
B={4,5,6,7}
print("L union de A et B:", A|B)
print("l intersection de A et B:", A&B)
print("les éléments présents dans A mais pas dans B:",A-B)
B.add (23)
print(B)
#A.add(3)
#print(A)
a=11
if a in A:
    print(f"{a} existe in A")
else:
    print(f"{a} n'existe pas dans A")