require('dotenv').config();
require('./config/logger');

var express = require('express'),
app = express(),
morgan = require('morgan'),
bodyParser = require('body-parser'),
path = require('path');

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));

let router = require('./routes');

app.use('/', router.web(express.Router()));
app.use('/api', router.api(express.Router()));

require('./models');

// const URL = require('./models/url.js');


// URL.find().then(u=>{
//   console.log(u)
// })

app.listen(process.env.PORT, () => {
    console.log('Listen on port: ' + process.env.PORT);
});