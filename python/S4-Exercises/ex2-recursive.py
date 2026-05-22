#n=int(input("donner un entier: "))
def somme_chiffres(n):
    if n==0:
        return 0
    else:
     x=n%10
     return  x +somme_chiffres(n//10)
    
print (somme_chiffres(409))