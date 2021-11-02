'use strict';

const mongoose = require('mongoose');
const Neta = mongoose.model('NetasList');

exports.list_all_netas = function(req, res) {
    Neta.find({}, function(err, neta) {
        if(err) res.send(err);
        res.json(neta);
    });
};

exports.create_a_neta = function(req, res) {
    let new_neta = new Neta(req.body);
    new_neta.save(function(err, neta) {
        if (err) res.send(err);
        res.json(neta);
    });
};

exports.read_a_neta = function(req, res) {
    Neta.findById(req.params.netaId, function(err, neta) {
        if (err) res.send(err);
        res.json(neta);
    });
};

exports.update_a_neta = function(req, res) {
    Neta.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, neta) {
        if (err) res.send(err);
        res.json(neta);
    });
};

exports.delete_a_neta = function(req, res) {
    Neta.remove({_id: req.params.taskId}, function(err, neta) {
        if (err) res.send(err);
        res.json({ message: 'Neta successfully deleted!'});
    });
};
