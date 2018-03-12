const express = require('express');
const config = require('./config');
const routes = require('./routes/endpoints');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');

(() => {
    mongoose.connect(config.db, {useMongoClient: true});
    mongoose.connection.on('error', (error)=> {
        console.log("Can't connect to Mongodb", error);
    })
})();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(config.appPort, () => {
    console.log(`API server run on port ${config.appPort}`)
});
module.exports = app;
