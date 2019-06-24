const config = require('./_core/config');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const App = express();

App.use(morgan('combined'));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));

require('./routes')(App);

try {
    const port = process.env.PORT || config.port;
    App.listen(port, () => {
        console.log(`Express server started on port: ${port}...`);
    })
} catch (err) {
    console.log('An error has occurred - Server fail to start.');
}
