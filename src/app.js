const express = require("express");
const bd = require("../src/infra/sqlite-db")
const app = express();
const usrController = require("../src/controller/usuarios-controller")
const trfController = require("../src/controller/tarefas-controller")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
const port = 3030


usrController(app,bd)
trfController(app,bd)


app.listen(port, ()=> console.log(`[INFO] Servidor rodando em localhost: ${port}`));
