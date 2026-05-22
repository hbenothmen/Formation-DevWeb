def carre(a):
 print (a**2)
carre(3)
print("#####moyenne#####")
def moyenne(note1,note2,note3):
    moy=(note1+note2+note3)/3
    print("la moyenne est:",moy)
moyenne(16,18,20)
def maximum(num1,num2):
    if(num1>num2):
      print(f"{num1} est le max" )
    else:
      print(f"{num2} est le max")
maximum(10,4)