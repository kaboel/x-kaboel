const ContactController = require('./_controllers/ContactController');

module.exports = (App) => {
    // Contact Routes
    App.get('/contacts', ContactController.index);
    App.post('/contacts', ContactController.create);
}
