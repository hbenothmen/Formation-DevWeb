from flask import Flask,redirect,url_for,render_template,request
import json 
app=Flask(__name__)
try:
    with open("contacts.json", "r", encoding="utf-8") as f:
        contacts=json.load(f)
except:
    contacts=[]
def save():
    with open("contacts.json", "w", encoding="utf-8") as f:
        json.dump(contacts, f , indent=4 , ensure_ascii=False)
@app.route("/")
def home():
    return redirect(url_for("afficher"))
@app.route("/afficher")
def afficher():
    return render_template("index.html", contacts=contacts)
@app.route("/ajouter", methods=["POST"])
def ajouter_contact():
  new_name=request.form["nom"]
  new_mail=request.form["email"]
  new_tel=request.form["tel"]
  contacts.append({
      "name":new_name,
      "email":new_mail,
      "mobile":new_tel

  })
  save()
  return redirect(url_for("afficher"))
@app.route("/supprimer/<int:index>", methods=["POST"])
def supprimer(index):
 if 0<= index <len(contacts):
  contacts.pop(index)
  save()
  return redirect(url_for("afficher"))
@app.route("/modifier/<int:index>", methods=["POST", "GET"])
def modifier(index):  
  if 0 <= index <len(contacts):
     if request.method== "POST":
        new_nom=request.form["newnom"]
        contacts[index]['name']=new_nom
        new_email=request.form["newmail"]
        contacts[index]['email']=new_email
        new_tel=request.form["newtel"]
        contacts[index]['mobile']=new_tel
        save()
        return redirect(url_for("afficher"))
  return render_template("modifier.html", index=index, contacts=contacts[index])
@app.route("/rechercher", methods=["GET"])
def rechercher():
      resultat=[]
      item=request.args.get("item","")
      for c in contacts:
         if item.lower()==(c["name"]).lower():
           
           resultat.append({"name":c["name"],
                          "email":c["email"],
                          "phone":c["mobile"]})
          
      return render_template ("resultat.html",  resultat=resultat)
if __name__ == "__main__":
    app.run(debug=True)