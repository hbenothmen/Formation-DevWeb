from flask import Flask,render_template,request, redirect, url_for

app=Flask(__name__)
taches=[
      "reviser le cours",
      "faire les exrecices",
      "faire les devoirs de maison "]
@app.route("/")
def home():
    return "Ma To-Do List"
@app.route("/taches")
def afficher_taches():
  
   return render_template ("home.html", taches=taches)
 
@app.route("/addtache", methods=["GET","POST"])
def newtache():
    if request.method == "POST":
      nouvelle_tache = request.form["newtache"]
      taches.append(nouvelle_tache)
      return redirect(url_for("afficher_taches"))
    return render_template("addtache.html")
if __name__ == "__main__":
    app.run(debug=True)