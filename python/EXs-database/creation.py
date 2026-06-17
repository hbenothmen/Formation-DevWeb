# import mysql.connector
# c=mysql.connector.connect(
#     host="localhost",
#     user="root",
#     password="",
#     database="cliniquedb"
# )
# cursor=c.cursor()
#cursor.execute("create table patients (id integer auto_increment primary key,nom varchar(100), prenom varchar(100), telephone integer,datenaissance date)")
#cursor.execute("create table medecins(id integer auto_increment primary key, nom varchar(100), specialite varchar(100))")
#cursor.execute("create table rendezvous(id integer auto_increment primary key, patientid integer,medecinid integer,daterdv date,statut varchar(100), foreign key(patientid) references patients(id), foreign key(medecinid) references medecins(id))")
####### AJOUT ########
# cursor.execute("insert into patients(nom, prenom, telephone,datenaissance) values ('ahmad','dkhil',52987654,'1969-12-12')") 
# cursor.execute("insert into patients(nom, prenom, telephone,datenaissance) values ('slim','bahri',21765890,'1970-10-10')") 
# cursor.execute("insert into patients(nom, prenom, telephone,datenaissance) values ('jihene','nasri',91988666,'1971-05-03')") 
# cursor.execute("insert into patients(nom, prenom, telephone,datenaissance) values ('amina','askri',52999999,'1980-11-19')") 
# cursor.execute("insert into patients(nom, prenom, telephone,datenaissance) values ('sami','rkik',50987677,'1979-08-15')") 
########### medecin #########
# cursor.execute("insert into medecins(nom, specialite) values ('aymen masoudi','cardiologue')") 
# cursor.execute("insert into medecins(nom, specialite) values ('safia miladi','cardiologue')") 
# cursor.execute("insert into medecins(nom, specialite) values ('radhia mahjoub','pediatre')") 
# cursor.execute("insert into medecins(nom, specialite) values ('salim aouadi','génécologue')") 
# cursor.execute("insert into medecins(nom, specialite) values ('amal snoussi','cardiologue')") 
# cursor.execute("insert into medecins(nom, specialite) values ('amin saadaoui','génécologue')") 
# cursor.execute("insert into medecins(nom, specialite) values ('mohammed saidi','dentist')") 
######## rendezvous ##########
# cursor.execute("insert into rendezvous( patientid ,medecinid ,daterdv) values (2, 3, '2026-06-18') ") 
# cursor.execute("insert into rendezvous( patientid ,medecinid ,daterdv) values (3, 5, '2026-06-10') ") 
# cursor.execute("insert into rendezvous( patientid ,medecinid ,daterdv) values (4, 4, '2026-06-17') ") 
# cursor.execute("insert into rendezvous( patientid ,medecinid ,daterdv) values (5, 3, '2026-06-19') ") 
# cursor.execute("insert into rendezvous( patientid ,medecinid ,daterdv) values (2, 2, '2026-06-15') ") 
#c.commit()
#c.close()