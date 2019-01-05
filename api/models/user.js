const mongoose = require('mongoose');

const authoritiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String
    },
    contact: {
        type: Number,
        unique: true,
        min: 12,
        max: 13
    },
    country: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String
    },
    createdOn: {
        type: String,
        default: Date()
    },
    lastModifiedOn: {
        type: String,
        default: Date()
    },
    activeStatus: {
        type: Boolean,
        default: true
    },
});

module.exports = mongoose.model('Authorities',authoritiesSchema);