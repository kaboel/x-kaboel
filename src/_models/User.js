const mongoose = require('mongoose');

const SCHEMA = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    avatarUrl: {
        type: String,
        default: 'https://image.flaticon.com/icons/png/512/97/97895.png'
    },
    isVerified: {
        type: Boolean,
        default: 'no'
    }
});
const MODEL = mongoose.model('User', SCHEMA, 'Users');

module.exports = MODEL;
