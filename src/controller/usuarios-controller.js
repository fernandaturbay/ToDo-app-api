const { response } = require("express")
const Usuario = require("../Models/usuarios")
module.exports = (app,bd) => {

    app.get("/usuarios", (req,res) => {

        bd.all ("SELECT * FROM USUARIOS", (error, rows) => {
            if(error) throw new Error("Erro ao consultar tabela");

            else res.send(rows)
        })
        
    } )
    app.get("/usuarios/:email", (req,res) => {
        for (let usr of bd.usuariosbd) {
            if (req.params.email == usr.email) {
                res.send(usr)
            }
        }
        res.send("Usuário não encontrado")
    })

    app.post("/usuarios", (req,res) => {
        const usr = new Usuario (req.body.nome,req.body.email,req.body.senha)
        bd.usuariosbd.push(usr)
        res.send("Usuário adicionado")        
    })

    app.delete("/usuarios/:email", (req,res) => {
        for (i = 0; i < bd.usuariosbd.length; i++){
            if (req.params.email == bd.usuariosbd[i].email){
                bd.usuariosbd.splice(i,1)
                res.send ("Usuário deletado")
            }
        }
        res.send ("Usuário não encontrado")
    })

    app.put("/usuarios/:email", (req,res) => {
        for (let usr of bd.usuariosbd) {
            if (req.params.email == usr.email) {
                usr.nome = req.body.nome
                usr.senha = req.body.senha
                res.send ("Usuário alterado")
            }
        }
        res.send ("Usuário não alterado")
    })  
}