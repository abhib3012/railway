var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/azazel');


var login = mongoose.model('login',
	{
		adhaarid: String,
		password: String
	}
);

var ticket = mongoose.model('ticket',
	{
		adhaarid: String,
		ticketid: String,
		name: String,
		seatNo: String
	}
);

var app = express();
var cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


var bodyParser = require('body-parser');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/book', cors(corsOptions), function (req, res) {
		ticketid = "l"
		var name = "some";
		var seatNo = "14"
		var ticketid = "sa";
		var logger = new ticket({ adhaar: req.body.adhaar, ticketid: ticketid, name: name, seatNo: seatNo });

		logger.save(function (err) {
		  if (err) {
		    console.log(err);
		  } else {
		    console.log('meow');
		  }
		});
		res.send('Ticket Booked with ID' + ticketid);
})

app.login('/login', cors(corsOptions), function (req, res) {

		//var logger = new login({ adhaar: req.body.adhaar, password: req.body.password });
		login.findOne({ 'adhaarid': req.body.adhaar, 'password' : req.body.password }, function (err, person) {
  		if (err) return handleError(err);
  		//console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
			console.log('Logged IN');
			res.send(1);
		})
		//res.send('LoggedIN');
})

app.listen(80);
