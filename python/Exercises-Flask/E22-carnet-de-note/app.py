from flask import Flask,render_template, request,redirect,url_for
import json
app=Flask(__name__)
#file json
try:
 with open("notes.json", "r", encoding="utf-8") as f:
   notes=json.load(f)
except:
   notes=[]
def sauvegarder():
   with open("notes.json", "w", encoding="utf-8") as f:
      json.dump(notes,f, indent=4, ensure_ascii=False)

@app.route("/afficher")
def afficher_note():
    return render_template("index.html",notes=notes)
@app.route("/ajouter", methods=["POST"])
def ajouter():
     new_note=request.form["newnote"]
     notes.append({"note":new_note})
     sauvegarder()
     return redirect(url_for("afficher_note"))
@app.route("/supprimer/<int:index>", methods=["POST"])
def supprimer(index): 
   if 0 <= index <len(notes):
    notes.pop(index)
    sauvegarder()
   return redirect(url_for("afficher_note")) 
@app.route("/modifier/<int:index>", methods=["GET","POST"])
def modifier_note(index):
   if not( 0 <= index <len(notes)):
    return redirect(url_for("afficher_note"))
   if request.method == "POST":
      new_note = request.form["newnote"]
      notes[index]["note"] = new_note
      sauvegarder()
      return redirect(url_for("afficher_note"))
   return render_template("/modifier.html", index=index, note=notes[index], )
if __name__ == "__main__":
    app.run (debug=True)