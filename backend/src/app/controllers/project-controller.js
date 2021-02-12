const express = require('express');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

const Project = require('../models/repository/project');
const Task = require('../models/repository/task');

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {                   // Usando o comando find() do mongoDB
        const projects = await Project.find().populate(['user', 'tasks']);

        return res.send({ projects });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects' });
    }
});

router.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId)
            .populate(['user', 'tasks']);

        return res.send({ project });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading projects' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description, nvagas, tasks } = req.body;

        const project = await Project.create({ title, description, nvagas, user: req.userId });

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project' });
    }

});

router.put('/:projectId', async (req, res) => {
    try {
        const { title, description, tasks } = req.body;
        const project = await Project.findByIdAndUpdate(req.params.projectId, {
            title,
            description
        }, { new: true })
            .populate(['user', 'tasks']);

        // Procura a task/tarefa anterior e remove
        project.tasks = [];
        await Task.deleteMany({ project: project._id });

        // Cria/atualiza uma nova tarefa apos remover a anterior
        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();

            project.tasks.push(projectTask);
        }));

        // Salva a 'tarefa'
        await project.save();

        return res.send({ project });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating project' });
    }
});

router.delete('/:projectId', async (req, res) => {
    try {
        const project = await Project.findByIdAndRemove(req.params.projectId)
            .populate('user');

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting project' });
    }
});


module.exports = app => app.use('/projects', router);