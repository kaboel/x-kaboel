const mongoose = require('mongoose');
const SCHEMA = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});
const MODEL = mongoose.model('Contact', SCHEMA, 'Contacts');

module.exports = MODEL;
