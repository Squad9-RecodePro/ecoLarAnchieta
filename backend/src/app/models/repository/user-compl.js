const mongoose = require("../../../config/database/conn");

const UserComplSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
    },
    renda: {
        type: String,
    },
    profissao: {
        type: String,
    },
    colaborar: {
        type: String,
    },
    moradores: {
        type: String,
    },
    tel: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    num: {
        type: String,
    },
    compl: {
        type: String,
    },
    bairro: {
        type: String,
    },
    cidade: {
        type: String,
        require: true,
    },
    cep: {
        type: String,
        require: true,
    },
    uf: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const UserCompl = mongoose.model("UserCompl", UserComplSchema);

module.exports = UserCompl;