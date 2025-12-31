
from flask import Flask, request
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load("model.pkl")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json.get("features", [])
    pred = model.predict([data])[0]
    return {"prediction": int(pred)}

if __name__ == "__main__":
    app.run(port=5000)
