const express = require('express');
const authMiddleware = require('../middlewares/auth');

const UserCompl = require('../models/repository/user-compl');

const router = express.Router();
// router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const usercompl = await UserCompl.find().populate('user');

        return res.json(usercompl);

    } catch (err) {
        return res.status(400).json({ error: 'Erro para listar todos!' });
    }
});

router.post('/', async (req, res) => {
    try {
        const usercompl = await UserCompl.create({ ...req.body, user: req.userId });

        return res.json(usercompl);

    } catch (err) {
        return res.status(400).json({ error: 'Erro para criar!' });
    }
});

router.put('/:usercomplId', async (req, res) => {
    try {
        const {
            nome,
            email,
            renda,
            profissao,
            colaborar,
            moradores,
            tel,
            endereco,
            num,
            compl,
            bairro,
            cidade,
            cep,
            uf
        } = req.body;
        const usercompl = await UserCompl.findByIdAndUpdate(req.params.usercomplId, {
            nome,
            email,
            renda,
            profissao,
            colaborar,
            moradores,
            tel,
            endereco,
            num,
            compl,
            bairro,
            cidade,
            cep,
            uf
        }, { new: true }).populate('user');

        res.json(usercompl);
    } catch (err) {
        return res.status(400).json({ error: 'Erro para atualizar!' });
    }
});

router.delete('/:usercomplId', async (req, res) => {
    try {
        await UserCompl.findByIdAndRemove(req.params.usercomplId);

        return res.json({ Message: 'Deletado com sucesso' });
    } catch (err) {
        return res.status(400).json({ error: 'Erro para deletar!' });
    }
});

module.exports = app => app.use('/usercompl', router);
