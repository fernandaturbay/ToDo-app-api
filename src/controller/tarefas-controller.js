const TarefasDAO = require("../DAO/tarefas-dao")
const tarefasDao = require("../DAO/tarefas-dao")

module.exports = (app,bd) => {
    const daoTarefas = new tarefasDao(bd)
    
    app.get("/tarefas", async (req,res) => {
    
        try{
            const listaTarefas= await daoTarefas.listarTarefas()
            res.send(listaTarefas)
    
        }catch(error){
            res.send(error)
        }
    } )

    app.get("/tarefas/:titulo", async (req,res) => {
       
        try{
            const encontraTarefa = await daoTarefas.procurarTarefa(req.params.titulo)
            res.send(encontraTarefa)
        }catch(error){
            res.send(error)
        }
    })

    app.post("/tarefas", async (req,res) => {

        const trf = [req.body.TITULO,req.body.DESCRICAO,req.body.STATUS,req.body.DATACRIACAO,req.body.ID_USUARIO]
        try{
            const adicionaTarefas = await daoTarefas.adicionarTarefas(trf)
            res.send(adicionaTarefas)
        }catch(error){
            res.send(error)
        }
    })

    app.delete("/tarefas/:titulo", async (req,res) => {
        
        try{
            const deletaTarefa = await daoTarefas.deletarTarefa(req.params.titulo)
            res.send(deletaTarefa)
        }catch(error){
            res.send(error)
        }
    })

    app.put("/tarefas/:titulo", async (req,res) => {

        try{
            const parametros = [req.body.TITULO,req.body.DESCRICAO,req.body.STATUS,req.body.DATACRIACAO, req.body.ID_USUARIO, req.params.titulo]
            const atualizaTarefa = await daoTarefas.atualizarTarefa(parametros)
            res.send(atualizaTarefa)
        }catch(error){

            res.send(error)
        }
    })  

}