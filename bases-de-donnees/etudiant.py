import mysql.connector
c=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="studentdb"
)
cursor=c.cursor()
###### ajout students ########
#cursor.execute("create table students(id integer auto_increment primary key,name varchar(70), email varchar(100))")
#cursor.execute("create table grades(id integer auto_increment primary key,student_id integer, subject varchar(100),grade decimal)")
# cursor.execute("insert into students(name, email) values ('sami','samisss@gmail.com')")
# cursor.execute("insert into students(name, email) values ('amal','amalaaa@gmail.com')")
# cursor.execute("insert into students(name, email) values ('ilhem','ilhemiii@gmail.com')")
########ajout grades#########
# cursor.execute("insert into grades(student_id, subject, grade) values ('1','mathematique',17)")
# cursor.execute("insert into grades(student_id, subject, grade) values ('1','physique',18)")
# cursor.execute("insert into grades(student_id, subject, grade) values ('2','mathematique',15)")
# cursor.execute("insert into grades(student_id, subject, grade) values ('3','mathematique',16)")
# cursor.execute("insert into grades(student_id, subject, grade) values ('2','physique',17)")
#cursor.execute("insert into grades(student_id, subject, grade) values ('4','physique',10)")
#c.commit()
cursor.execute("select * from students")
for row in cursor:
    print(row)
cursor.execute("select grade from grades where student_id = 1")
r=cursor.fetchall()
print("Les note d'etudiant numero 1:")
for row in r:
    print(row)
cursor.execute("select AVG(grade) from grades where student_id = 1 ")
for row in cursor:
    print("la moyenne est:",row)
 #######update##########
#cursor.execute("update students set name='aymen' where id=2")  
#cursor.execute("update grades set grade='12' where student_id=1 and subject='physique'")
#cursor.execute("delete from students where id=3")
cursor.execute("delete from grades where student_id=4")

c.commit()
c.close()