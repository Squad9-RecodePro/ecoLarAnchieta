const { Router } = require("express");
const routes = Router();

routes.get("/register", (req, res) => {
 res.send("Ok teste")
})

module.exports = routes;