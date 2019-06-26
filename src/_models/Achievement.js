const mongoose = require('mongoose');

const SCHEMA = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    embedLink: {
        type: String,
        required: true
    },
    issuer: {
        type: String,
    },
    issuerLink: {
        type: String
    },
    iat: {
        type: Date,
    },
    exp: {
        type: Date,
    }
});
const MODEL = mongoose.model('Achievement', SCHEMA, 'Achievements');

module.exports = MODEL;
