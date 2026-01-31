from flask import Flask, jsonify
import psycopg2
import os

app = Flask(__name__)

# Conexion a PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv("DB_HOST"),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )
    return conn


@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "ok",
        "message": "Backend service is running"
    })


@app.route('/data', methods=['GET'])
def data():

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("SELECT id, name FROM items;")
    rows = cur.fetchall()

    cur.close()
    conn.close()

    data = []

    for row in rows:
        data.append({
            "id": row[0],
            "name": row[1]
        })

    return jsonify(data)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)