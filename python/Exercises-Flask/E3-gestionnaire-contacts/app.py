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

if __name__ == "__main__":
    app.run(debug=True)