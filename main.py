from flask import Flask, render_template,request

app=Flask(__name__)


@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/getaway/holiday/')
def holiday():
    location = request.args.get("id")
    return render_template('holiday.html',location=location)

@app.route('/getaway/bookings')
def bookings():
    return render_template('bookings.html')







if __name__=='__main__':
    app.run(debug=True,port=7070)