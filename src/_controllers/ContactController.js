const Contact = require('../_models/Contact');

module.exports = {
    async index(req, res) {
        try {
            await Contact.find({}, (err, contacts) => {
                res.json(contacts);
            })
        } catch (err) {
            res.status(500).send({
                error: `An error has occurred - ${err.message}`
            })
        }
    },

    async create(req, res) {
        try {
            const contact = new Contact(req.body);
            await contact.save();
            res.json(contact);
        } catch (err) {
            res.status(500).send({
                error: `An error has occurred - ${err.message}`
            })
        }
    }
}


