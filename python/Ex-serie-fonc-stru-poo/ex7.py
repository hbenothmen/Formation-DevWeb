list=[2,5,7,1,13,4]
def calcul():
    somme= 0
    max=list[0]
    for l in list:
        somme=somme+l
        if max<=l:
            max=l
    print("la somme des element de la liste est:",somme)
    print("la moyenne des elements est:",somme/len(list))
    print("le plus grand nombres des elements est:",max)
calcul()
 