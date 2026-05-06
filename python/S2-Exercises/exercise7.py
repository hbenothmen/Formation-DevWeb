print("entrer le premier note")
note1=float(input())
print("entrer le deuxieme note")
note2=float(input())
print("entrer le troisieme note")
note3=float(input())
 
moyenne = (note1 + note2 + note3)/3
print("la moyenne est:", moyenne)
if moyenne>=10: 
 print("Admis")
else:
 print("Refusé")