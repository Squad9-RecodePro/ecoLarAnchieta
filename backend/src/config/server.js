const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("../app/controllers/index")(app);

app.listen(3001);


// controllers - endpoints
// services - logica de negocio
// repository - todas chamadas do banco
// controllers -> services -> repository
// minuto 21:00
