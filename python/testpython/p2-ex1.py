nombre=int(input("entrer un nombre:"))
s=0
for i in range(nombre+1):
    if i%2 == 0:
        print(i)
        s=s+i
print("la somme est:", s)
