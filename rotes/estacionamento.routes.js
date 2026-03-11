const express = require('express');
const estacionamentoController = require('../controler/testacionamento.controler');
const router = express.Router();

// Rotas da Aplicação
router.get("/", estacionamentoController.mostrarTarefa);
router.post("/adicionar", estacionamentoController.addTarefa);
router.post("/deletar", estacionamentoController.deletarTarefa);
router.post("/alterar", estacionamentoController.alterarTarefa);

module.exports = router;