const mongoose = require('mongoose');

const authoritiesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    taskDate: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    },
    share: [{
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        taskDate: {
            type: String,
        },
        emailSendTo: {
            type: String,
        }
    }],
    created_on: {
        type: String,
        default: Date()
    },
    last_modified_on: {
        type: String,
        default: Date()
    }
});

module.exports = mongoose.model('Authorities',authoritiesSchema);