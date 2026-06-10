import mysql.connector
#connexion a la base de donnees bibliodb
co=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="bibliodb"
    )
cursor=co.cursor()
#verification de la connexion
"""# cursor.execute("SHOW DATABASES")
# for db in cursor:
#     print(db)
"""
"""# cursor.execute("create table books(id integer auto_increment primary key," \
# " title varchar(100)," \
# " author varchar(100)," \
# " quantity integer )")"""

"""#cursor.execute("insert into books (title,author,quantity) values ('Physique','Ahmad',5)")
#cursor.execute("insert into books (title,author,quantity) values ('Math','Ali',6)")
#cursor.execute("insert into books (title,author,quantity) values ('Computer','Imen',4)")
"""
#cursor.execute("insert into books (title,author,quantity) values ('Computer networks','Mariem',0)")
#co.commit()
#######selexion########
cursor.execute("select * from books")
print("Tous les livres: ")
for row in cursor:
    print(row)

cursor.execute("select * from books where title= 'Computer' ")
print("recherche des livres specifiques (titre)")
for row in cursor:
    print(row)

cursor.execute("select * from books where quantity>0") 
print("Les livres disponibles")
r=cursor.fetchall()
for row in r:
    print(row)
######update#######
#cursor.execute("update books set title = 'Chimie' where id=1  ")
#cursor.execute("update books set quantity = '10' where title='Chimie'  ")
#co.commit()
####show tables#####
# cursor.execute("DESCRIBE books")
# for row in cursor:
#     print(row)
#####delete tables######
cursor.execute("delete from books where title='Philosophy'")
co.commit()
co.close()