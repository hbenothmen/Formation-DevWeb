from flask import Flask,request,redirect,url_for,render_template
import json
app=Flask(__name__)
try:
  with open("notes.json", "r") as f:
    notes=json.load(f)
except: 
 notes=[]
def save():
 with open("notes.json", "w", encoding="utf-8") as f:
  json.dump(notes, f, indent=4, ensure_ascii=False)

@app.route("/afficher", methods=(["GET"]))
def afficher():
  return render_template("index.html", notes=notes)

@app.route( "/ajouter" , methods=["GET","POST"])
def ajouter():
  if request.method=="POST":
    new_note=request.form["newnote"]
    matiere=request.form["cours"]
    notes.append({
                    "matiere":matiere,
                    "note":float(new_note)})
    save()
    return redirect(url_for("afficher"))
  return render_template('index.html', notes=notes)

@app.route("/modifier/<int:index>", methods=(["GET","POST"]))
def modifier(index):
  if not(0<= index <len(notes)):
    return redirect(url_for('afficher'))
  if request.method == "POST":
    nouv_note=request.form["newnote"]
    notes[index]["note"]=nouv_note
    save()
    return redirect(url_for('afficher'))
  return render_template("modifier.html", index=index, notes=notes[index])

@app.route("/supprimer/<int:index>", methods=["POST"])
def supprimer(index):
  if 0 <= index < len(notes):
    notes.pop(index)
    save()
  return redirect(url_for("afficher"))

@app.route("/rechercher", methods=["POST"])
def rechercher():
   item=request.form["cours"]
   resultat=None
   for n in notes:
    if item.lower() == n["matiere"].lower():
      resultat=n
      break
    
   return render_template("index.html", notes=notes, resultat=resultat)
if __name__ == "__main__":
    app.run(debug=True)
