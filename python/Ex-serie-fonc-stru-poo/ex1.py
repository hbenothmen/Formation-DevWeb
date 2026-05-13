#Manipulation de listes
fruits=["orange","banane","raisin","peche","pomme"]
#1)Ajout
fruits.append("mangue")
print(fruits)
#fruits.insert(2,"mangue")
#2)suppression 1 ier fruit
fruits.remove("banane")
print(fruits)
#3)affichage de troisieme element
print(fruits[2])
#4)Trier la liste par ordre alphabétique
fruits.sort()
print(fruits)
#5)la longueur de la liste.

print(len(fruits))
