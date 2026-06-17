
from flask import Flask, app, render_template ,request
import mysql.connector

app = Flask(__name__)

conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="dbfournisseur"
    ) 
cur = conn.cursor()
#afficher les produits
@app.route('/',methods=['GET','POST'])
def index():
    # Initialisation de la variable de recherche
    search = request.form.get('search')
    if search:
        # Recherche filtrée par le nom du fournisseur
        # Le format %search% permet de chercher une partie du nom
        query = ("SELECT p.id, p.nom, p.prix, p.quantite, f.nom "
                 "FROM produits p "
                 "JOIN fournisseurs f ON p.fournisseur_id = f.id "
                 "WHERE f.nom LIKE %s")
        cur.execute(query, (f"%{search}%",))
        produits = cur.fetchall()
        print(produits)
    else:
        # Affichage de tous les produits par défaut
        query = ("SELECT p.id, p.nom, p.prix, p.quantite, f.nom "
                 "FROM produits p "
                 "JOIN fournisseurs f ON p.fournisseur_id = f.id")
        cur.execute(query)
        produits = cur.fetchall()
        
    return render_template('index.html', produits=produits)
#ajouter un fournisseur
@app.route('/addf',methods=['GET','POST'])
def addf():
    if request.method == 'POST':
        nomf=request.form.get('nomf')
        telf=request.form.get('telf')
        emailf=request.form.get('emailf')
        if nomf and telf and emailf:
            cur.execute("insert into fournisseurs (nom,telephone,email) values(%s,%s,%s)",(nomf,telf,emailf))
            conn.commit()
    return render_template('ajouterf.html')
#ajouter un produit
@app.route('/addp',methods=['GET','POST'])
def addp():
    if request.method == 'POST':
       nomp=request.form.get('nomp')
       prixp=request.form.get('prixp')
       quantitep=request.form.get('quantitep')
       idf=request.form.get('idf')
       if nomp and prixp and quantitep and idf:
           cur.execute("insert into produits (nom,prix,quantite,fournisseur_id) values(%s,%s,%s,%s)",(nomp,prixp,quantitep,idf))
           conn.commit()
    cur.execute("SELECT nom, id FROM fournisseurs")
    nomf=cur.fetchall()
    for f in nomf:
        print(f[0])
    return render_template('ajouterp.html',nomf=nomf)   
@app.route('/modifyp/<int:id>', methods=['GET', 'POST'])
def modifyp(id):
   if request.method == 'POST':
       nomp=request.form.get('nomp')
       prixp=request.form.get('prixp')
       quantitep=request.form.get('quantitep')
       idf=request.form.get('idf')
       if nomp and prixp and quantitep and idf:
           cur.execute("update produits set nom=%s,prix=%s,quantite=%s,fournisseur_id=%s where id=%s",(nomp,prixp,quantitep,idf,id))
           conn.commit()
   cur.execute("SELECT nom, id FROM fournisseurs")
   nomf=cur.fetchall()
   cur.execute("SELECT * FROM produits WHERE id=%s", (id,))
   produit = cur.fetchone()
   return render_template('modifyp.html',nomf=nomf,produit=produit)
@app.route('/deletep/<int:id>')
def deletep(id):
    cur.execute("DELETE FROM produits WHERE id=%s", (id,))
    conn.commit()
    return index()



if __name__ == '__main__':
    app.run(debug=True)