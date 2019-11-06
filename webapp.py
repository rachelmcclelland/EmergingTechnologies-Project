from flask import Flask, escape, request, render_template

app = Flask(__name__)

@app.route('/')
def application():
    return render_template('application.html')