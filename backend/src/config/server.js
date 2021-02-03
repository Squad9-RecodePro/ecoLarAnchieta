const express = require('express');
const cors = require('cors');
const register = require('../controllers/register-controller')
const app = express();
const bodyParser = require("body-parser");


app.use(cors());

app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(register);

require("../controllers/auth-controller")(app);
require("../controllers/project-controller")(app);



app.listen(3000);







// controllers - endpoints
// services - logica de negocio
// repository - todas chamadas do banco
// controllers -> services -> repository