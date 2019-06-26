const Contact = require('./_controllers/ContactController');
const Plan = require('./_controllers/PlanController');

module.exports = (App) => {

    // Contact routes
    App.get('/api/contacts/:id', Contact.show);
    App.route('/api/contacts')
        .get(Contact.index)
        .post(Contact.store)
        .delete(Contact.destroy);

    // Plan routes
    App.get('/api/plans/:id', Plan.show);
    App.route('/api/plans')
        .get(Plan.index)
        .post(Plan.store)
        .delete(Plan.destroy);

}


