const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// let allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Headers', "*");
//     next();
// }
// app.use(allowCrossDomain);


require("../app/controllers/index")(app);

app.listen(5000);


// controllers - endpoints
// services - logica de negocio
// repository - todas chamadas do banco
// controllers -> services -> repository
// minuto 21:00
