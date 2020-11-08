const express = require("express");
const router = express.Router();
const controller = require("../controllers/clientesController.js");

router.post("/", controller.postCliente);
router.get("/", controller.getAll);
router.get("/compradores", controller.getCompradores);
router.get("/:cpf", controller.getByCpf);

module.exports = router;
