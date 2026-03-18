const estacionamentoModel = require('../model/estacionamento.model');
// esta importando o model
const addTarefa = (req, res) => {
    res.end("Adicionar dados");
};

// variavel que contem os dados
const mostrarTarefa = (req, res) => {
    estacionamentoModel.readAllEstacionamento().then((informacao) => {
        res.render("index", { title: "principal", informacao: informacao });
    });
};

const deletarTarefa = (req, res) => {
    res.end("Deletar dados");
};

const alterarTarefa = (req, res) => {
    res.end("Alterar dados");
};

// esta exportanto as variaveis
module.exports = {
    addTarefa,
    mostrarTarefa,
    deletarTarefa,
    alterarTarefa,
}