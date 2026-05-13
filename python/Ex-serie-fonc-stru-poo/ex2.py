nombres=[11,3,6,10,12,40,25,8,34,5]
#1) Affichage des nombres pairs
impair=[]
for n in nombres[:]:
    if n%2 == 0:
       nombres.remove(n)
print(nombres)
#somme des elements
somme=0
for n in nombres:
    somme=somme+n
print(somme)
#minimum et maximum
min=nombres[0]
max=nombres[0] 
for n in nombres:
    if min>n:
     min=n 

    if max<n:
     max=n      
print("Le minimum de la liste est:",min)
print("Le maximum de la liste est:",max)
#les carrés des nombres
print(nombres)
for n in nombres:
   car=[]
   car.append(n**2)
print(car)   