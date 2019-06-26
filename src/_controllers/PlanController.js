const Plan = require('../_models/Plan');

module.exports = {
    async index(req, res) {
        try {
            await Plan.find({}, (err, data) => {

                (data === null) ? res.json(data) : res.send({ message: `No plans found.` })

            })
        } catch (err) {
            res.status(500).send({
                error: `An error has occurred - ${err.message}`
            })
        }
    },

    async store(req, res) {
        try {
            const plan = new Plan(req.body);
            await plan.save();
            res.json(plan);
        } catch (err) {
            res.status(500).send({
                error: `An error has occurred - ${err.message}.`
            })
        }
    },

    async show(req, res) {
        await Plan.findById(req.params.id)
            .then(data => {

                (data !== null) ? res.json(data) : res.send({ error: `Plan not found.`});

            }).catch(err => {
                res.status(500).send({
                    error: `An error has occurred - ${err.message}.`
                })
            })
    },

    async destroy(req, res) {
        await Plan.findById(req.body._id)
            .then(async data => {

                (data === null) ? res.send({ error: `Unable to delete - Plan not found.`}) :

                    await Plan.deleteOne(req.body , (err) => {
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
