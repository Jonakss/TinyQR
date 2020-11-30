module.exports = app => {
    var express = require('express');
    var router = express.Router();
    
    app.use("/", require('./webRouter.js')(router));
    app.use("/api", require('./apiRouter.js')(router));
};