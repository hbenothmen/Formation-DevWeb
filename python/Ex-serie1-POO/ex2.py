class Rectangle:
    def __init__(self,largeur,hauteur):
     self.largeur=largeur
     self.hauteur=hauteur
    def surface(self):
       return  self.largeur * self.hauteur 
r1=Rectangle(10,20)
print("le surface de ce rectangle est:",r1.surface()) 