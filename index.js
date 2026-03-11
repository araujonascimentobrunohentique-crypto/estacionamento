const http = require("http");
const express = require("express"); // Linha adicionada
const morgan = require("morgan");
const router = express.Router();
const app = express(); // Linha adicionada
require('dotenv').config();


const tarefasroutes = require("./routes/tarefasroutes");
// configurações iniciais
app.use(morgan("dev"));
app.set("views", "./views"); //adicionado
app.set("view engine", "ejs"); //adicionado
app.use(express.static("./public"));//adicionado


// Coloca o servidor no ar
app.listen(porta, () => {
  console.log("Servidor rodando");
  console.log("Endereco: http://localhost:" + porta);
});
