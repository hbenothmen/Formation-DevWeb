#a:signifie append c a d ajout sans supprission de contenu existant
ff=open("etudiants.txt", "a")
ff.write("\n nom:ahmad")
ff.write("\n prenom:masoudi")
ff.write("\n age:35")
ff.write("\n moyenne:15") 
ff.close()
f= open ("etudiants.txt","r")
inf=f.read()
print(inf)
f.close()
#w:signifie ecrit et ecraser le contenu existant
# with open ("etud.txt", "w") as fw:
#    fw.write("\n nom:Ilhem")
#    fw.write("\n prenom:masmoudi")
#    fw.write("\n age:30")
#    fw.write("\n moyenne:16") 
# with open("etud.txt","r") as fr:
#    print(fr.read())