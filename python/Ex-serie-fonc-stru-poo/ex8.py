try:
 nombre1=int(input("entrer le premier nombre: "))
 nombre2=int(input("entrer le deuxieme nombre: "))

 print("le resultat est:" , nombre1/nombre2)     
except ValueError:
 print("mauvaise saisie")
except ZeroDivisionError:
 print("impossible de diviser par 0")
#print("######")