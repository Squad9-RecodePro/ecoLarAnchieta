const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("../app/controllers/index")(app);

const port = 5000;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});


// controllers - endpoints
// services - logica de negocio
// repository - todas chamadas do banco
// controllers -> services -> repository
// minuto 21:00
