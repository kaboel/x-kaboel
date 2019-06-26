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
    imageUrl: {
        type: String
    },
    targetUrl: {
        type: String
    }
});
const MODEL = mongoose.model('Project', SCHEMA, 'Projects');

module.exports = MODEL;
