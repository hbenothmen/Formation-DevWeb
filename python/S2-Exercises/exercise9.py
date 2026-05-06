ch=input("entre une chaîne de caractères: " )
voyelles="aeiouy"
counter=0
for c in ch.lower():
    if c in voyelles:
        counter=counter+1
print(f" le nombre de voyelles est: {counter}")
