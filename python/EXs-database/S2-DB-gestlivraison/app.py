from flask import Flask ,render_template
import mysql.connector
app=Flask(__name__)
co=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="livraisondb"
)
cur=co.cursor()
@app.route("/")

def home():
    cur.execute("select * from clients")
    client=cur.fetchall()
    return render_template("index.html", client=client)

if __name__=="__main__":
    app.run(debug=True)