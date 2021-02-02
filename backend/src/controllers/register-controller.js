const { Router } = require("express");
const routes = Router();

const sendController = require('../controllers/register-user')

// routes.get("/register", (req, res) => {
//     res.send("OK Teste")
// })

/*Aqui nesse ponto ja esta registrando e resgatando dados do DB
Só não esta enviando o dado criptografado ainda */

routes.get("/register", sendController.allUsers);
routes.post("/register", sendController.registerUser);

module.exports = routes;
