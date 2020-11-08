const clientes = require('../models/clientes');

const postCliente = (req, res) => {
  let cliente = new clientes(req.body);
  cliente.save(err => {
    if(err) {
      res.status(424).send({ message: err.message })
    }
      res.status(201).send({
        status: 'TRUE',
        message: 'Cliente incluído com sucesso'
      });
  });
};

const getAll = (req, res) => {
  clientes.find((err,clientes)=>{
    if(err) {
      res.status(424).send({ message: err.message })
    }
      res.status(200).send(clientes)
  });
};


const getCompradores = (req, res) => {
    clientes.find({comprou: true}, {nome:1, email: 1, _id: 0}, (err, clientes)=>{
      if  (err) {
        res.status(424).send({ message: err.message})
      }
      res.status(200).send(clientes)
});
};

const getByCpf = (req, res) => {
    const cpf = req.params.cpf;
    clientes.find({ cpf }, (err, cliente) => { if (err) {
        res.status(424).send({ message: err.message });
      } else if (cliente.length > 0) {
        res.status(200).send(cliente);
      } else {
        res.status(404).send({message:"O cliente não foi encontrado"})
      };
    });
  };
  
module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
