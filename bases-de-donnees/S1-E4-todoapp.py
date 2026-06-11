import mysql.connector
co=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="tachesdb"
)
####### READ#######
cursor=co.cursor()
cursor.execute("select description from tasks")
r=cursor.fetchall()
print(r)
cursor.execute("select description from tasks where status='terminé'")
r=cursor.fetchall()
print(r)
cursor.execute("select description from tasks where status='en cours'")
r=cursor.fetchall()
print(r)
######## UPDATE ########
cursor.execute("update tasks set status='terminé' where id=1")
cursor.execute("update tasks set description='reviser le dernier cours' where id=1")
cursor.execute("delete from tasks where title='tache5'")
co.commit()
co.close()