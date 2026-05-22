
n=int(input("donner un nombre"))
def somme_chiffres(n):
 somme=0
 while n>0:
        x=n % 10
        somme=somme+x
        n=n//10
 return somme
    
print(somme_chiffres(n))
somme_chiffres(123)