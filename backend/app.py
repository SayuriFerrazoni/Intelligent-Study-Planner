from flask import Flask, request, jsonify
from flask_cors import CORS
from planner import generate_plan

app = Flask(__name__)
CORS(app)

@app.route("/plan", methods=["POST"])
def plan():
    data = request.json

    schedule = generate_plan(
        subjects=data["subjects"],
        hours_per_day=data["hours_per_day"],
        missed_day=data.get("missed_day")
    )

    return jsonify(schedule)

if __name__ == "__main__":
    app.run(debug=True)

