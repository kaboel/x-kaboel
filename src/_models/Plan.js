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
    projectType: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    details: {
        type: String
    }
});
const MODEL = mongoose.model('Plan', SCHEMA, 'Plans');

module.exports = MODEL;
