from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/aktuellt')
def aktuellt():
    return render_template('aktuellt.html')

@app.route('/maleri')
def maleri():
    return render_template('maleri.html')

@app.route('/golv')
def golv():
    return render_template('golv.html')

@app.route('/snickeri')
def snickeri():
    return render_template('snickeri.html')

if __name__ == '__main__':
    app.run(debug=True)