import mysql.connector
from flask import Flask,render_template,request,redirect,url_for
app=Flask(__name__)
conn=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="cliniquedb" )
cu=conn.cursor()
#afficher les patients,les medecins et les rendez-vous
@app.route("/",methods=["GET","POST"])
def home():
  
     cu.execute("select * from patients ")
     patients=cu.fetchall()
     cu.execute("select * from medecins") 
     medecins=cu.fetchall() 
     cu.execute("SELECT r.id, p.nom, p.prenom, r.daterdv,r.statut,m.nom FROM patients p JOIN rendezvous r join medecins m ON p.id = r.patientid and m.id = r.medecinid")
     rdv=cu.fetchall()
 
     return render_template("index.html", patients=patients,medecins=medecins, rdv=rdv)
#afficher les rendes-vous par patient ou par medecin
@app.route("/recherche", methods=["POST","GET"])
def rechercher():
     search=request.form.get("search")
    
     query=("SELECT p.nom,p.prenom, r.daterdv FROM patients p" \
      " JOIN rendezvous r ON p.id=r.patientid" \
      " WHERE p.nom LIKE %s")
     cu.execute(query,(f"%{search}%",))
     rdvpatients=cu.fetchall()
     query=("SELECT m.nom, m.specialite, r.daterdv"
     " FROM medecins m" \
      " JOIN rendezvous r ON m.id=r.medecinid" \
      " WHERE m.nom LIKE %s ")
     cu.execute(query,(f"%{search}%",))
     rdvmedecins=cu.fetchall()
     query=("select count(*) from medecins m"
     " join rendezvous r on m.id=r.medecinid "
     "where m.nom like %s")
     cu.execute(query,(f"%{search}%",))
     total_rdv=cu.fetchone()
     return render_template("resultat.html", rdvpatients=rdvpatients, rdvmedecins=rdvmedecins,total_rdv=total_rdv)
#ajout d un patient
@app.route("/ajoutp", methods=["POST","GET"])
def ajouterp() :
  if request.method=="POST":
   nomp=request.form.get('nomp')
   prenomp=request.form.get('prenomp')
   telp=request.form.get('telp')
   datenp=request.form.get('datenp')

   cu.execute("insert into patients (nom, prenom, telephone, datenaissance) values (%s,%s,%s,%s)",(nomp,prenomp,telp,datenp))   
   conn.commit()  
  return render_template('ajoutp.html')
#ajout d un medecin
@app.route("/ajoutm", methods=["POST","GET"])
def ajouterm():
   if request.method=="POST":
      nomm=request.form.get('nomm')
      specialitem=request.form.get('specialitem')
      cu.execute("insert into medecins (nom, specialite) values (%s,%s)",(nomm,specialitem))
      conn.commit()
   return render_template('ajoutm.html')
#ajout d un rendez-vous
@app.route("/ajoutrdv", methods=["POST","GET"])
def ajoutrdv():
   if request.method=="POST":
      daterdv=request.form.get('daterdv')
      statut=request.form.get('statut')
      idp=request.form.get('idp')
      idm=request.form.get('idm')
      if daterdv and statut and idp and idm:
         cu.execute("insert into rendezvous (patientid,medecinid,daterdv,statut) values (%s,%s,%s,%s)",(idp,idm,daterdv,statut))
         conn.commit()
   cu.execute("select nom, id from patients")
   nomp=cu.fetchall() 
   for p in nomp:
      print(p[0])
   cu.execute("select nom, id from medecins")
   nomm=cu.fetchall() 
   for m in nomm:
      print(m[0])
   return render_template('ajoutrdv.html',nomp=nomp,nomm=nomm)  
#supprimer patient
@app.route("/deletep/<int:id>")
def deletep(id):
   cu.execute("delete from patients where id=%s", (id,))
   conn.commit()
   return home()
#supprimer medecin
@app.route("/deletem/<int:id>")
def deletem(id):
   cu.execute("delete from medecins where id=%s", (id,))
   conn.commit()
   return home()
#supprimer rendez-vous
@app.route("/deleterdv/<int:id>")
def deleterdv(id):
   cu.execute("delete from rendezvous where id=%s", (id,))
   conn.commit()
   return home()
#update d un patient
@app.route("/modifp/<int:id>", methods=["POST","GET"])
def modifierp(id):
   if request.method=="POST":
      nomp=request.form.get('nomp')
      prenomp=request.form.get('prenomp')
      telp=request.form.get('telp')
      datenp=request.form.get('datenp')
      if nomp and prenomp and telp and datenp:
       cu.execute("update patients set nom=%s,prenom=%s,telephone=%s, datenaissance=%s where id=%s", (nomp,prenomp,telp,datenp,id))
       conn.commit()
       return redirect(url_for("home"))
   cu.execute("SELECT * FROM patients WHERE id=%s", (id,))
   patient = cu.fetchone()
   return render_template('modifp.html',patient=patient)
#update d un medecin
@app.route("/modifm/<int:id>", methods=["GET","POST"])
def modifm(id):
   if request.method=="POST":
      nomm=request.form.get('nomm')
      specialite=request.form.get('specialite')
      if nomm and specialite:
         cu.execute("update medecins set nom=%s, specialite=%s where id=%s",(nomm,specialite,id))
         conn.commit()
         return redirect(url_for("home"))
      
   cu.execute("select * from medecins where id=%s", (id,))
   medecin=cu.fetchone()
   return render_template("modifierm.html", medecin=medecin)
@app.route("/modifrdv/<int:id>", methods=["POST","GET"])
def modifier_rdv(id):
   if request.method=="POST":
       daterdv=request.form.get('daterdv')
       statut=request.form.get('statut')
       idp=request.form.get('idp')
       idm=request.form.get('idm')
       if daterdv and statut and idp and idm:
         cu.execute("update rendezvous set patientid=%s,medecinid=%s,daterdv=%s,statut=%s where id=%s",(idp,idm,daterdv,statut,id))
         conn.commit() 
         return redirect(url_for("home")) 
   cu.execute("select * from rendezvous where id=%s",(id,)) 
   rdv=cu.fetchone()   
   cu.execute("select nom, id from patients")
   nompatient=cu.fetchall() 
   for p in nompatient:
      print(p[0])
   cu.execute("select nom, id from medecins")
   nommedecin=cu.fetchall() 
   for m in nommedecin:
      print(m[0])
   return render_template("modifierrdv.html",nompatient=nompatient,nommedecin=nommedecin,rdv=rdv)

if __name__=="__main__":
    app.run(debug=True)