#dictionnaires
etudiant={
    "nom":"Ali",
    "age":22,
    "note":15
}
print(etudiant["nom"])
etudiant["ville"]="Tunis"
print(etudiant)
etudiant["note"]=19
print(etudiant)
del etudiant["age"]
print(etudiant)
etudiant.items()