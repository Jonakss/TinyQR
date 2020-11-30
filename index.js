require('dotenv').config();
require('./config/logger');

var app = require('express')(),
morgan = require('morgan'),
bodyParser = require('body-parser'),
jade = require('jade'),
qr = require('qrcode');
var path = require('path');

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('index');
});

//Router
//web page
//API

app.listen(process.env.PORT, () => {
    console.log('Listen on port: ' + process.env.PORT);
});