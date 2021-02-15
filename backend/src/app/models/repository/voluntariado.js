const mongoose = require("../../../config/database/conn");

const VoluntariadoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    nvagas: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Voluntariado = mongoose.model("Voluntariado", VoluntariadoSchema);

module.exports = Voluntariado;