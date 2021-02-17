const express = require('express');
const router = express.Router();

const Voluntariado = require('../models/repository/voluntariado');

router.get('/', async (req, res) => {

    try {                   // Usando o comando find() do mongoDB
        const voluntariado = await Voluntariado.find();

        return res.json(voluntariado);
    } catch (err) {
        return res.status(400).json({ error: 'Error loading voluntariado' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, nvagas } = req.body;

        const voluntariado = await Voluntariado.create({ title, description, nvagas });

        await voluntariado.save();

        return res.json(voluntariado);

    } catch (err) {
        return res.status(400).json({ error: 'Error creating new project' });
    }

});

router.put('/:voluntariadoId', async (req, res) => {
    try {
        Voluntariado.findByIdAndUpdate({ _id: req.params.voluntariadoId }, req.body)
            .then(() => {
                Voluntariado.findOne({ _id: req.params.voluntariadoId })
                    .then((voluntariado) => {
                        res.json(voluntariado);
                    });
            });
            
    } catch (err) {
        return res.status(400).json({ error: 'Error updating one' });
    }
});

router.delete('/:voluntariadoId', async (req, res) => {
    try {
        const voluntariado = await Voluntariado.findByIdAndRemove(req.params.voluntariadoId);

        return res.json("Deletado com sucesso!");

    } catch (err) {
        return res.status(400).json({ error: 'Error deleting one' });
    }
});


module.exports = app => app.use('/voluntariado', router);