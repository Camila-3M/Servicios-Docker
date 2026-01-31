from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        "status": "ok",
        "message": "Backend service is running"
    })

@app.route('/data', methods=['GET'])
def data():
    return jsonify([
        { "id": 1, "name": "Item A" },
        { "id": 2, "name": "Item B" }
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)