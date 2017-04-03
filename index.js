var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/azazel');


var log = mongoose.model('log', 
	{ 
		headers: String,
		location: String
	}
);

var app = express();
var cors = require('cors')

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.post('/', cors(corsOptions), function (req, res) {
	
  	res.send('Hello World');
	
})

app.listen(80);
