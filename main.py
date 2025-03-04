import re

from flask import *

app = Flask(__name__)


@app.route('/')
def homepage():
    return render_template("homepage.html")

@app.route('/resume')
def resume():
    return render_template("resume.html")

if __name__ == '__main__':
    app.run(debug=True)  # Will re-run with any change in code
