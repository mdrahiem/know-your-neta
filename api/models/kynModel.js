'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NetaSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter name of the neta'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('NetasList', NetaSchema);