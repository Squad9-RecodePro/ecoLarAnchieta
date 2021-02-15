const express = require('express');
const router = express.Router();

const Voluntariado = require('../models/repository/voluntariado');

router.get('/', async (req, res) => {

    try {                   // Usando o comando find() do mongoDB
        const voluntariado = await Voluntariado.find();

        return res.send(voluntariado);
    } catch (err) {
        return res.status(400).send({ error: 'Error loading voluntariado' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, nvagas } = req.body;

        const voluntariado = await Voluntariado.create({ title, description, nvagas });

        await voluntariado.save();

        return res.send(voluntariado);

    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project' });
    }

});

router.delete('/:voluntariadoId', async (req, res) => {
    try {
        const voluntariado = await Voluntariado.findByIdAndRemove(req.params.voluntariadoId);

        return res.send("Deletado com sucesso!");

    } catch (err) {
        return res.status(400).send({ error: 'Error deleting project' });
    }
});


module.exports = app => app.use('/voluntariado', router);