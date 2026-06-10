import mysql.connector
c=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="livraisondb"
)
cursor=c.cursor()
#cursor.execute("create table clients(id integer auto_increment primary key,nom varchar(50),addresse varchar(100),telephone integer)")
#cursor.execute("create table livraisons(id integer auto_increment primary key,clientid integer, datelivraison date,statut varchar(30),montant integer, CONSTRAINT fk_clientid FOREIGN KEY (clientid) REFERENCES clients(id)  ) ")
# cursor.execute("insert into clients(nom,addresse,telephone) values ('ahmad','tunis',23654789) ")
# cursor.execute("insert into clients(nom,addresse,telephone) values ('amal','bizerte',22654799) ")
# cursor.execute("insert into clients(nom,addresse,telephone) values ('ahmad','tunis',22666789) ")
# cursor.execute("insert into clients(nom,addresse,telephone) values ('ahmad','tunis',52699989) ")
# cursor.execute("insert into clients(nom,addresse,telephone) values ('ahmad','tunis',23888888) ")
# cursor.execute("insert into clients(nom,addresse,telephone) values ('ahmad','tunis',21644789) ")
#cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('1','2026-05-12','delivred',100) ")
# cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('2','2026-04-10','delivred',200) ")
# cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('3','2026-05-12','delivred',100) ")
# cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('1','2026-06-13','encours',150) ")
# cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('2','2026-05-18','delivred',100) ")
# cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('3','2026-06-12','encours',100) ")
# cursor.execute("insert into livraisons(clientid , datelivraison ,statut,montant) values ('6','2026-06-30','encollect',100) ")
#c.commit()
#####Afficher toutes les livraisons ######
cursor.execute("select * from livraisons")
r=cursor.fetchall()
print(r)
######
cursor.execute("select * from livraisons where statut='en attente'")
r=cursor.fetchall()
print(r)
######
cursor.execute("select * from livraisons where statut='delivred'")
r=cursor.fetchall()
print(r)
###
cursor.execute("select clients.nom,livraisons.datelivraison from clients join livraisons on clients.id=livraisons.clientid")
r=cursor.fetchall()
print(r)
######
cursor.execute("select clientid,livraisons.datelivraison from livraisons  where clientid='2'")
print("-----livraisons du client num 2 --------")
r=cursor.fetchall()
print(r)
######## UPDATE ########
#cursor.execute("update livraisons set statut='delivred' where id=6")
#cursor.execute("update clients set nom='sonia', addresse='sousse' where id=3")
#c.commit()
######## DELETE ########
#cursor.execute("delete from livraisons where id=7")
#cursor.execute("delete from clients where id=6")
#c.commit()
####### JOIN ########
#cursor.execute("select livraisons.datelivraison, livraisons.statut,livraisons.montant, clients.nom,clients.addresse,clients.telephone FROM livraisons JOIN clients  ON livraisons.clientid=clients.id")
cursor.execute("select l.datelivraison, l.statut,l.montant, cl.nom,cl.addresse,cl.telephone FROM livraisons as l JOIN clients as cl ON l.clientid=cl.id")
r=cursor.fetchall()
print(r)
cursor.execute("select cl.nom, COUNT(l.id) FROM livraisons as l JOIN clients as cl ON l.clientid=cl.id GROUP BY (l.clientid)")
r=cursor.fetchall()
print(r)
cursor.execute("select cl.nom, SUM(l.montant) FROM livraisons as l JOIN clients as cl ON l.clientid=cl.id GROUP BY (l.clientid)")
r=cursor.fetchall()
print(r)
c.close()
