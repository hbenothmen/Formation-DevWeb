import mysql.connector
#from flask import Flask
#app=Flask(__name__)
c=mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="stockdb"
)
cursor=c.cursor()
# cursor.execute("create table products(id integer auto_increment primary key," \
# "name varchar(50)," \
# "price integer," \
# "quantity integer," \
# "category varchar(50))")
# cursor.execute("insert into products(name,price,quantity,category) values ('boucheron', 200, 20,'parfum')")
# cursor.execute("insert into products(name,price,quantity,category) values ('idole',350, 10,'parfum')")
# cursor.execute("insert into products(name,price,quantity,category) values ('bourgeoi', 90, 20,'mascara')")
# cursor.execute("insert into products(name,price,quantity,category) values ('j adore', 150, 30,'parfum')")
# cursor.execute("insert into products(name,price,quantity,category) values ('mybelline', 60, 40,'rouge a levre')")
# cursor.execute("insert into products(name,price,quantity,category) values ('lella', 30, 15,'mascara')")
# c.commit()
#@app.route("/afficher" methods=[GET])
#def afficher():
 #   return render_template("index.html", )


###### READ #########
cursor.execute("select * from products")
r=cursor.fetchall()
print(r)
cursor.execute("select * from products where category='parfum'")
r=cursor.fetchall()
print(r)
cursor.execute("select name from products where quantity=0")
r=cursor.fetchall()
print(r)
######### UPDATE ######
#cursor.execute("update products set price=300 where id=4")
#cursor.execute("update products set quantity=10 where id=4")
#c.commit()
######## DELETE #######
cursor.execute("delete from products where id=6")
c.commit()
c.close()
#if __name__=="__main__":
    #app.run(debug=True)