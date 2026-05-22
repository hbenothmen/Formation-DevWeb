import re

email=input("entrer email: ")
pattern=r"^[\w+.-]+@[\w.-]+\.\D+$"
result=re.search(pattern,email)
if result:
    print("email valid")
    print(result.group())
else:
    print("email non valid")
#####################################
tel=input("entrer un num: ")
telpattern=r"^00216\d{8}$"
result_tel=re.search(telpattern,tel)
if result_tel:
 print("le numero de telephone est:", result_tel.group())
else:
 print("numero invalid") 
###############################
password=input("entrer le mot de passe: ")

p=r"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
result_pass=re.search(p,password)
if result_pass:
    print("true")
    print(result_pass.group())
else:
    print("non valid")