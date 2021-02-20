module.exports = class TarefasDAO {
    constructor (bd) {
        this.bd = bd;
    }
    
    listarTarefas(){
        return new Promise((resolve, reject)=>{
            this.bd.all ("SELECT * FROM TAREFAS", (error, rows) => {
                if(error) reject (`Erro ao consultar tabela`);
                
                else resolve (rows)
            })
        })
    }
    
    adicionarTarefas(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)', [parametro[0], parametro[1], parametro[2], parametro[3], parametro[4]],(error, feito)=>{
                if(error) reject (`Erro ao adicionar tarefa. Erro${error}`)
                else resolve(`Tarefa ${parametro[0]} adicionada`)
            
            })
        })
    }

    procurarTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM TAREFAS WHERE TITULO=(?)', [parametro], (error, feito)=>{
                if (error) reject (`Erro ao procurar tarefa ${parametro}`)
                else resolve(feito)
            })
        })
    }

    deletarTarefa(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('DELETE FROM TAREFAS WHERE TITULO=(?)', [parametro], (error, feito)=>{
                if (error) reject (`Erro ao deletar tarefa`)
                else resolve(`Tarefa ${parametro} deletada`)
            })
        })
    }

    atualizarTarefa(parametro){
        return new Promise((resolve, reject)=>{
            const query ='UPDATE TAREFAS SET TITULO=COALESCE(?, TITULO), DESCRICAO=COALESCE(?, DESCRICAO), STATUS=COALESCE(?, STATUS), DATACRIACAO=COALESCE(?, DATACRIACAO), ID_USUARIO=COALESCE(?, ID_USUARIO) WHERE TITULO=(?)'
            this.bd.all(query, parametro, (error, feito)=>{
                if(error) reject (`Erro ao atualizar a tarefa ${parametro[0]} . Erro:${error}`)
                else resolve (`Tarefa ${parametro[0]} atualizado`)
            } )
        })
    }

}

   



