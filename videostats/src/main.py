import os

from flask import Flask, render_template,request,jsonify

import mysql.connector
from mysql.connector import Error

DEBUG = True

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/query',methods = ['POST'])
def do_query():
    if not DEBUG:
        try:
            print("connecting to database...")
            connection = mysql.connector.connect(host="34.70.1.192", user="root", passwd="123456",database='testdatabase')
            cursor = connection.cursor()
            cursor.execute(request.json["query"])
            result = cursor.fetchall()
            connection.commit()
            connection.close()
        except Error as e:
            print(f"error '{e}'")
            return jsonify({"result":False,"msg":f"error: '{e}'"})
    else:
        print("Did query: ",request.json["query"])
        return jsonify({"result":False,"msg":["1","2","3",["1","2"]]})
    return jsonify({"result":True,"msg":result})
        
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080,debug=False)

    
    