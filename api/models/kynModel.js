'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const sourcesSchema = new Schema({
    name: { type: String },
    img: { type: String }
});
const controversiesSchema = new Schema({
    text: { type: String },
    sources: [ sourcesSchema ]
});

const NetaSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter name of the neta'
    },
    designation: {
        type: String
    },
    party: {
        type: String
    },
    age: {
        type: Number
    },
    selfProfession: {
        type: String
    },
    spouseProfession: {
        type: String
    },
    constituency: {
        type: String
    },
    contactEmail: {
        type: String
    },
    permanentAddress: {
        type: String
    },
    presentAddress: {
        type: String
    },
    contactNumbers: {
        type: String
    },
    about: {
        type: String
    },
    education: {
        type: String
    },
    assemblyAttendance: {
        type: Number
    },
    assemblyAttendenceNationalAvg: {
        type: Number
    },
    debatesParticipated: {
        type: Number
    },
    debatesParticipatedNationalAvg: {
        type: Number
    },
    questionsAsked: {
        type: Number
    },
    questionsAskedNationalAvg: {
        type: Number
    },
    assets: {
        self: { type: String },
        spouse: { type: String },
        amount: { type: String }
    },
    controversies: [
        controversiesSchema
    ],
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['inactive', 'active']
        }],
        default: "active"
    }
});

module.exports = mongoose.model('NetasList', NetaSchema);