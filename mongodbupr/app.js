"use strict";

const express = require('express');
const app = new express();
const morgan = require('morgan');

// middle wear
const bodyParser = require('body-parser');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // form data
app.set('view engine', 'pug');
// end middle wear

require('./routes/api.routes')(app);
require('./routes/server.routes')(app);

app.listen(3030, () => {
    console.log("Server is up!");
});