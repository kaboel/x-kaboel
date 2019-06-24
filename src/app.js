const config = require('./_core/config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const App = express();

App.use(morgan('combined'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(App);

const db = require('./_core/config').db;
mongoose.connect(db.uriString, { useNewUrlParser: true });

const conn = mongoose.connection;
conn.once('open', () => {
    console.log('Database Connected...');
    try {
        const port = process.env.PORT || config.port;
        App.listen(port, () => {
            console.log(`Express server started on port: ${port}...`);
        })
    } catch (err) {
        console.log(`ERROR: Server failed to start - ${err.message}`);
    }
});
conn.on('error', (err) => {
    console.log(`Database connection error - ${err}`);
});


