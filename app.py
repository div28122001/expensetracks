from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

expenses = []

@app.route('/')
def index():
    return render_template('11.html', expenses=expenses)

@app.route('/add_expense', methods=['POST'])
def add_expense():
    description = request.form['description']
    amount = float(request.form['amount'])
    expenses.append({'description': description, 'amount': amount})
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)