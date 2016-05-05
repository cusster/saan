var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/sanmasarap');

var port = process.env.PORT || 8080,
    v1 = require('./app/routes/v1')(express);

app.use('/api', v1);
app.listen(port);
console.log('Magic happens on port ' + port);
