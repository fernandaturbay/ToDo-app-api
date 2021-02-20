//const { response } = require("express")
const Usuario = require("../Models/usuarios")
const usuariosDao = require("../DAO/usuarios-dao")
module.exports = (app,bd) => {

    const DaoUsuarios = new usuariosDao(bd)

    app.get("/usuarios", async (req,res) => {

        try{
            const listaUsuarios= await DaoUsuarios.listarUsuarios()
            res.send(listaUsuarios)

        }catch(error){
            res.send(error)
        }
    } )

    app.get("/usuarios/:email", async (req,res) => {
       
        try{
            const encontraUsuario = await DaoUsuarios.procurarUsuario(req.params.email)
            res.send(encontraUsuario)
        }catch(error){
            res.send(error)
        }
    })

    app.post("/usuarios", async (req,res) => {
        const usr = [req.body.NOME,req.body.EMAIL,req.body.SENHA]
        try{
            const adicionaUsuarios = await DaoUsuarios.adicionarUsuario(usr)
            res.send(adicionaUsuarios)
        }catch(error){
            res.send(error)
        }
    })

    app.delete("/usuarios/:email", async (req,res) => {
        
        try{
            const deletaUsuario = await DaoUsuarios.deletarUsuario(req.params.email)
            res.send(deletaUsuario)
        }catch(error){
            res.send(error)
        }
    })

    app.put("/usuarios/:email", async (req,res) => {
        try{
            const parametros = [req.body.NOME, req.body.EMAIL, req.body.SENHA, req.params.email]
            const atualizaUsuario = await DaoUsuarios.atualizarUsuario(parametros)
            res.send(atualizaUsuario)
        }catch(error){

            res.send(error)
        }
    })  
}