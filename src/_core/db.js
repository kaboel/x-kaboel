const db = require('./config').db;
const mongoose = require('mongoose');

module.exports = () => {
    return mongoose
        .connect(`${db.server}://${db.user}:${db.password}@${db.host}/${db.dbName}`);
}

