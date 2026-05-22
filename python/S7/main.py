# import requests
# res=requests.get("http://api.github.com")
# print(res.status_code)
# ######import from mathoutils-methode 1#####
from mathoutils import add,mul
print(add(2,5))
print(mul(7,3))
#####import from mathoutils-methode 2#####
import mathoutils  
print(mathoutils.add(2,5))
print(mathoutils.mul(7,3))
#####import from mathoutils avec alias-methode 3 #####
import mathoutils as math  
print(math.add(2,5))
print(math.mul(7,3))
###math est un module standard livré avec Python.#####
import math
print (math.sqrt(16))
print(math.pow(2,3))
print(math.pi)
print(math.sin(90))
####creation d un package pack1 et on va importer from pack1####
from pack1.text_outils import *
bonjour("hafiza")
question()
print(majuscule("bienvenue mes amis"))
####ou bien######
from pack1 import text_outils
text_outils.bonjour("hafiza")
text_outils.question()
print(text_outils.majuscule("bienvenue mes amis"))
##############
