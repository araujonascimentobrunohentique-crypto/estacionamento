// Carrega as configurações do arquivo .env para o objeto process.env (segurança de senhas)
require("dotenv").config();

// Importa o driver oficial do MariaDB para Node.js
const mariadb = require("mariadb");

// Cria um "Pool" (reservatório) de conexões. 
// Isso evita abrir e fechar uma conexão nova a cada clique, melhorando a performance.
const pool = mariadb.createPool({
    host: process.env.DBHOST,      // Endereço do servidor (ex: localhost)
    user: process.env.DBUSER,      // Usuário do banco (ex: root)
    password: process.env.DBPASS,  // Senha do banco
    database: process.env.DBNAME,  // Nome do banco de dados
    connectionLimit: 5,            // No máximo 5 pessoas podem usar o banco ao mesmo tempo
});

// Função principal que executa os comandos SQL no banco
// query: o comando SQL | params: os dados que serão inseridos (opcional)
async function executarQuery(query, params = []) {
    console.log(
        "============================================================================"
    );
    console.log("dbconnect.js", "executarQuery()");
    
    // Mostra no terminal os argumentos recebidos (a query e os parâmetros) para debug
    console.log(arguments);

    let conn; // Variável que vai segurar a conexão
    try {
        // Tenta pegar uma conexão livre do reservatório (pool)
        conn = await pool.getConnection();

        // Executa a query de fato e guarda o resultado na variável 'rows'
        const rows = await conn.query(query, params);

        console.log(
            "============================================================"
        );
        
        // Retorna os dados encontrados para quem chamou a função
        return rows;

    } catch (err) {
        // Se algo der errado (banco desligado, erro de digitação no SQL), mostra o erro aqui
        console.error("erro ao executar query:", err);
        throw err; // Repassa o erro para o Controller saber que falhou

    } finally {
        // O 'finally' sempre executa, dando certo ou errado.
        // Se a conexão foi aberta, ela é liberada de volta para o pool (MUITO IMPORTANTE)
        if (conn) conn.release();
    }
}

// Exporta a função para que os Models possam usá-la
module.exports = { executarQuery };