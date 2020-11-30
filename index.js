require('dotenv').config();

var app = require('express')(),
morgan = require('morgan'),
jade = require('jade'),
qr = require('qrcode');

app.use(morgan('tiny'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.send('Hello World KSS!!');
});

app.listen(process.env.PORT, () => {
    console.log('Listen on port: ' + process.env.PORT);
});