from flask import Flask,render_template,request,redirect,url_for
import json
app=Flask(__name__)
try:
  with open("tasks.json", "r") as fjson:
     taches = json.load(fjson)  
except:    
 taches = []
def sauvegarder_tache():
   with open("tasks.json", "w", encoding="utf-8") as fjson:
      json.dump(taches, fjson, indent=4, ensure_ascii=False)
      
@app.route("/taches")
def afficher():
    return render_template("/gestiontaches.html",taches=taches )

@app.route("/addtache", methods=["GET","POST"])
def addtache():
  if request.method == "POST":
    new_tache = request.form["newtache"]  
    taches.append({
                   "titre": new_tache,
                   "statut":"en cours"
                   })
    sauvegarder_tache()
    return redirect(url_for("afficher"))
  return render_template("gestiontaches.html", taches=taches)

@app.route("/modifier/<int:index>", methods=("GET","POST"))
def modifier_tache(index):
   if not (0 <= index < len(taches)):
      return redirect(url_for("afficher"))
   if request.method == "POST":
      newtitle=request.form["titre"]
      taches[index]["titre"] = newtitle
      sauvegarder_tache()
      return redirect(url_for("afficher"))
   return render_template("modifier.html", index=index,tache=taches[index] )

@app.route("/supprimer/<int:index>", methods=["POST"])
def supptache(index):
   if 0 <= index < len(taches):
      taches.pop(index)
      sauvegarder_tache()
   return redirect(url_for ("afficher"))
@app.route("/terminer/<int:index>", methods=["POST"]) 
def terminer(index):
   if 0 <= index < len(taches):
      taches[index]["statut"] = "terminée"
      sauvegarder_tache()
   return redirect(url_for('afficher'))

if __name__=="__main__":
    app.run(debug=True)
