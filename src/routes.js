const ContactController = require('./_controllers/ContactController');
const PlanController = require('./_controllers/PlanController');

module.exports = (App) => {

    // Contact routes
    App.get('/api/contacts/:id', ContactController.show);
    App.route('/api/contacts')
        .get(ContactController.index)
        .post(ContactController.store)
        .delete(ContactController.destroy);

    // Plan routes
    App.get('/api/plans/:id', PlanController.show);
    App.route('/api/plans')
        .get(PlanController.index)
        .post(PlanController.store)
        .delete(PlanController.destroy);

}


