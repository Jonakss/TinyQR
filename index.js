require('dotenv').config();
require('./config/logger');

var app = require('express')(),
morgan = require('morgan'),
bodyParser = require('body-parser'),
jade = require('jade'),
path = require('path');

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));

require('./routes')(app);

require('./models');

app.listen(process.env.PORT, () => {
    console.log('Listen on port: ' + process.env.PORT);
});