module.exports = class UsuariosDAO {
    constructor (bd) {
        this.bd = bd;
    }
    
    listarUsuarios(){
        return new Promise((resolve, reject)=>{
            this.bd.all ('SELECT * FROM USUARIOS', (error, rows) => {
                if(error) reject (`Erro ao consultar tabela`)
                
                else resolve (rows)
            })
        })
        
    }

    adicionarUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?,?,?)', [parametro[0], parametro[1], parametro[2]],(error, feito)=>{
                if(error) reject (`Erro ao adicionar usuario. Erro ${error}`)
                else resolve(`Usuario adicionado`)

            })
        })
    }

    procurarUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('SELECT * FROM USUARIOS WHERE EMAIL=(?)', [parametro], (error, usuario)=>{
                if (error) reject (`Erro ao encontrar o usuario`)
                else resolve(usuario)
            })
        })
    }

    deletarUsuario(parametro){
        return new Promise((resolve, reject)=>{
            this.bd.all('DELETE FROM USUARIOS WHERE EMAIL=(?)', [parametro], (error, feito)=>{
                if (error) reject (`Erro ao deletar usuario`)
                else resolve(`Usuario ${parametro} deletado`)
            })
        })
    }

    atualizarUsuario(parametro){
        return new Promise((resolve, reject)=>{
            const query ='UPDATE USUARIOS SET NOME=COALESCE(?, NOME), EMAIL=COALESCE(?, EMAIL), SENHA=COALESCE(?, SENHA) WHERE EMAIL=(?)'
            this.bd.all(query, parametro, (error, feito)=>{
                if(error) reject (`Erro ao atualizar o usuario ${parametro[3]}. Erro: ${error}`)
                else resolve (`Usuario ${parametro[3]} atualizado`)
            } )
        })
    }
}