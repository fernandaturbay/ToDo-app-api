const express = require("express");
const bd = require("./infra/sqlite-db")
const app = express();
const usrController = require("../src/controller/usuarios-controller")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
usrController(app,bd)
const port = 3000


app.listen(port, ()=> console.log(`[INFO] Servidor rodando em localhost: ${port}`));
