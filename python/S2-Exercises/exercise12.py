secret=8
nombre=0
while nombre!=secret:
 nombre=int(input("donne un nombre: "))
 if nombre < secret:
    print("Trop petit")
 elif nombre > secret:
    print ("Trop grand")
 else:
  print("Bravo")    