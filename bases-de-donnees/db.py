import mysql.connector
c=mysql.connector.connect(
 host="localhost",
 user="root",
 password="",
 database="testdb")
cursor=c.cursor()
#######create table#########
# cursor.execute("create table etudiant(id integer,nom varchar(100), age integer)")
# c.commit()
# cursor.execute("create table enseignant(id integer auto_increment primary key," \
# "nom varchar(100), age integer)")
# c.commit()
# cursor.execute("show databases")
# for db in cursor:
#     print(db)
#########insert donnees##########
# cursor.execute("insert into enseignant(nom,age)values('ahmad',23)")
# cursor.execute("insert into enseignant(nom,age)values('amal',22)")
# c.commit()
# name=input("enter name")
# age=int(input("enter age"))
# cursor.execute('insert into enseignant(nom,age) values (%s,%s)',(name,age))
# c.commit()
########## select data #####
# cursor.execute("select * from enseignant")
# for row in cursor:
#     print(row)
# cursor.execute("select nom from enseignant")
# for row in cursor:
#     print(row)
# cursor.execute("select * from enseignant where age>18")
# for row in cursor:
#     print(row)
#########update#########
# cursor.execute("update enseignant set nom='ali' where id=8")
# c.commit()
# cursor.execute("delete from enseignant where id=8")
# c.commit()
# cursor.execute("select * from enseignant ")
# r=cursor.fetchall() ##list
# print(r)
# for row in r:
#     #print(row[0])
#     print(row[1])
#     print(row)
#cursor.execute("create table etudiant1(id integer,nom varchar(100), age integer)")
cursor.execute("drop table etudiant")
# cursor.execute("alter table etudiant1 rename to etudiant")
# cursor.execute("alter table etudiant1 change column email classe varchar(255)")
# cursor.execute("alter table etudiant1 drop column  classe ")
c.commit()
####database#####
#cursor.execute("create database db1")

c.close()