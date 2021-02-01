const express = require('express');
const cors = require('cors');
const register = require('../controllers/register-controller')
const app = express();
app.use(cors());
app.use(express.json());
app.use(register)

app.listen(3000);

