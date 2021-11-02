'use strict';

module.exports = function(app) {
    const netasController = require('../controllers/kynController');

    // neta's list route
    app.route('/netas')
        .get(netasController.list_all_netas)
        .post(netasController.create_a_neta);

    app.route('/netas/:netaId')
        .get(netasController.read_a_neta)
        .put(netasController.update_a_neta)
        .delete(netasController.delete_a_neta);
};