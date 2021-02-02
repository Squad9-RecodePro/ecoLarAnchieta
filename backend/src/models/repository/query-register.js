const connection = require('../../config/connection');

class Register {
    constructor() {
        this.id
        this.email
        this.senha
    }

    sendTo(req, res) {
        connection.query(`INSERT INTO moradores(nome, email, senha) VALUES ('${this.nome}', '${this.email}','${this.senha}')`, (error, result) => {
            if(error) {
                res.send(error)
            } else {
                res.status(201).send("Cadastro efetuado com Sucesso!")
            }
        });
    }

    getAll(req, res) {
        connection.query('SELECT * FROM moradores', (error, result) => {
            if(error) {
                res.send(error)
            } else {
                res.json(result)
            }
        });
    }
}

module.exports = new Register;
