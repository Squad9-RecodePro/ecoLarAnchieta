const express = require('express');
const cors = require('cors');
const register = require('../controllers/register-controller')
const app = express();

app.use(cors());
app.use(express.json());
app.use(register);

app.listen(3000);



// controllers - endpoints
// services - logica de negocio
// repository - todas chamadas do banco
// controllers -> services -> repository