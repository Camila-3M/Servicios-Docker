from flask import Flask, jsonify
from flask_cors import CORS
import datetime
import platform

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "mensaje": "Backend funcionando correctamente",
        "fecha": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "sistema": platform.system(),
    })

@app.route("/info")
def info():
    return jsonify({
        "proyecto": "Proyecto Docker Grupal",
        "lenguaje": "Python flask",
        "estado": "Activo",
        "puerto": 5000,
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)