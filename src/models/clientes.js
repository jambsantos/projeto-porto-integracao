const mongoose = require("mongoose");

const clientesSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    cpf: { type: Number },
    dataNascimento:{ type: String }, 
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
},{
    versionKey: false
});

module.exports = mongoose.model("clientes", clientesSchema);