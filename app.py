from flask import Flask, jsonify, render_template
import json

app = Flask(__name__)

# Charger les données des projets à partir d'un fichier JSON


def load_projects():
    with open('data/projects.json', encoding='utf-8') as f:
        return json.load(f)



@app.route('/')
def home():
    projects_json = load_projects()
    return render_template('index.html', section="home", projects = projects_json )

@app.route('/section/about')
def about():
    return jsonify({"section": "about"})

@app.route('/section/projects')
def projects():
    return jsonify({"section": "projects"})

@app.route('/section/contact')
def contact():
    return jsonify({"section": "contact"})

if __name__ == '__main__':
    app.run(debug=True)
