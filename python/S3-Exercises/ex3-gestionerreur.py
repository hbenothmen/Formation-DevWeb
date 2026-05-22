try:
  nombre=int(input("entrer un nombre:"))
except:
  print("erreur:tu dois entrer un entier")
def division(n):
    try:

     d=nombre/n
     print(d)  
    except:
     print ("erreur")
    finally:
        print("###fin de division###")

division(5) 
#a=1   
#print(nombre+a)
#int(input("donner un nombre"))