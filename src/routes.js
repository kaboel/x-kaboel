const ContactController = require('./_controllers/ContactController');

module.exports = (App) => {
    // Contact Routes
    App.get('/contacts', ContactController.index);
    App.post('/contacts', ContactController.create);
    App.get('/contacts/contact=:id', ContactController.show);
    App.delete('/contacts', ContactController.destroy);
}
