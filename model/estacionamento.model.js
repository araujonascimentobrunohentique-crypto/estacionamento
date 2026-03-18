const db = require("../bd/bdconnect");
//importando o Banco

// as informações da tabela ele vai ler as informaçoes e passa para o controler
class Estacionamento {
    static async readAllEstacionamento() {
        console.log("estacionamento.model.js", "readAllEstacionamento()");
        const query = "select * from estacionamento";
        var dados = await db.executarQuery(query);
        return db.executarQuery(query);
   }
}

module.exports = Estacionamento;
//exportando a classe estacionamento 