from flask import Flask, render_template, request

app = Flask(__name__)

# Startsida
@app.route('/')
def index():
    return render_template('index.html')

# Sida för aktuellt
@app.route('/aktuellt')
def aktuellt():
    return render_template('aktuellt.html')

# Kontaktsida (om du har en separat sådan, annars används #kontakt på startsidan)
@app.route('/kontakt', methods=['GET', 'POST'])
def kontakt():
    if request.method == 'POST':
        # Här lägger du till logik senare för att skicka e-post
        pass
    return render_template('kontakt.html')

# --- NYA RUTTER FÖR TJÄNSTER ---
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