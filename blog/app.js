"use strict";
const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/endpoints/index').router;

// init mongodb
(() => {
    mongoose.connect(config.db, {useMongoClient: true});
    mongoose.connection.on( 'error', (err) => {
        console.log("Can't connect to database!", {err: err});
    })
})();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(config.appPort, () => {
    console.log("API server is started");
});

module.exports = app;

