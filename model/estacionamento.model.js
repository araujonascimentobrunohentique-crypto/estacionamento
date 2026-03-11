const db = require("../bd/bdconnect");

class Estacionamento {
    static async readAllEstacionamento() {
        console.log("estacionamento.model.js", "readAllEstacionamento()");
        const query = "select * from estacionamento";
        var dados = await db.executarQuery(query);
        return db.executarQuery(query);
   }
}

module.exports = Estacionamento;