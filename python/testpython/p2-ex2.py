notes=[12,15,18,10,20]

def moyenne(notes):
    s=0
    for n in notes:
     s=s+n
    return s/len(notes)

print("la moyenne des notes est:",moyenne(notes))