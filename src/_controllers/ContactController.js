const Contact = require('../_models/Contact');

module.exports = {
    async index(req, res) {
        try {
            await Contact.find({}, (err, data) => {

                (data === null) ? res.json(data) : res.send({ message: `No contact found.` })

            })
        } catch (err) {
            res.status(500).send({
                error: `An error has occurred - ${err.message}.`
            })
        }
    },

    async store(req, res) {
        try {
            const contact = new Contact(req.body);
            await contact.save();
            res.json(contact);
        } catch (err) {
            res.status(500).send({
                error: `An error has occurred - ${err.message}.`
            })
        }
    },

    async show(req, res) {
         await Contact.findById(req.params.id)
            .then(data => {

                (data !== null) ? res.json(data) : res.send({ error: `Contact not found.`});

            }).catch(err => {
                res.status(500).send({
                    error: `An error has occurred - ${err.message}.`
                })
            })
    },

    async destroy(req, res) {
        await Contact.findById(req.body._id)
            .then(async data => {

                (data === null) ? res.send({ error: `Unable to delete - Contact not found.`}) :

                await Contact.deleteOne(req.body , (err) => {
                    if(err) res.status(500).send({ error: `An error has occurred - ${err}.` });
                    res.send(`Data deleted.`)
                })

            }).catch(err => {
                res.status(500).send({
                    error: `An error has occurred - ${err.message}`
                })
            });
    }
}


