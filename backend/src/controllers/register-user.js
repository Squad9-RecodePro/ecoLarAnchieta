const register = require('../models/repository/query-register');

class SendController {
    allUsers(req, res) {
        register.getAll(req, res);
    }

    registerUser(req, res) {
        const { nome, email, senha } = req.body;
        register.nome = nome;
        register.email = email;
        register.senha = senha;
        
        register.sendTo(req, res);
    }
}

module.exports = new SendController;
