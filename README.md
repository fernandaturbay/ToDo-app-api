# To-do App
> Projeto de API Restful do Módulo 3 do Resilia Educação

## Para iniciar a aplicação:
Utilizando o terminal, clone o repositório, instale as dependências do projeto e inicie ao final do download.

```sh
git clone
npm install
npm start
```
## Rotas
Feito com API Rest usando 4 verbos HTTP, sendo eles ```GET, POST, PUT E DELETE```. As requisições são feitas utilizando duas tabelas do banco de dados: ```TAREFAS E USUARIOS```. 
### Método GET
- Para consultar toda a tabela de tarefas, você deve fornecer a seguinte rota: ```http://localhost:3030/tarefas```. A mesma coisa deve ser feita para consultar a tabela de usuários, com a rota ```http://localhost:3030/usuarios```. Será retornado um array de objetos com todas as informações.

- Para consultar apenas uma tarefa, forneça a rota ```http://localhost:3030/tarefas/:titulo```, utilizando o **título** da tarefa como parâmetro. Será retornado um array de objetos com as informações solicitadas.
 
- Para consultar apenas um usuário, forneça a rota ```http://localhost:3030/usuarios/:email```, utilizando o **email** do usuario como parâmetro. Será retornado um array de objetos com as informações solicitadas. 

### Método POST
- Para inserir um **usuário**, use a rota ```http://localhost:3030/usuarios``` com as seguintes informações:
```json
{
	"NOME": "Exemplo",
	"EMAIL": "exemplo@provedor.com",
	"SENHA": "*********"
}
```
> Será retornada a mensagem "Usuário adicionado" caso a operação seja bem sucedida.

- Para inserir uma **tarefa**, use a rota ```http://localhost:3030/tarefas``` com as seguintes informações:
```json
 {
    "TITULO": "Exemplo",
    "DESCRICAO": "Exemplo",
    "STATUS": "Exemplo",
    "DATACRIACAO": "00/00/0000",
    "ID_USUARIO": 0
  }
```
> Será retornada a mensagem "Tarefa Exemplo adicionada" caso a operação seja bem sucedida.

##Método PUT
- Para atualizar um **usuário**, você deve usar a rota ```http://localhost:3030/usuarios/:email``` alterando o campo que deseja utilizando o seguinte formato:
```json
{
	"NOME": "Exemplo",
	"EMAIL": "exemplo@provedor.com",
	"SENHA": "*********"
}
```
> Será retornada a mensagem "Usuário Exemplo atualizado" caso a operação seja bem sucedida.

- Para atualizar uma **tarefa**, você deve usar a rota ```http://localhost:3030/tarefas/:titulo``` alterando o campo que deseja utilizando o seguinte formato:
```json
  {
    "ID": 0,
    "TITULO": "EXEMPLO",
    "DESCRICAO": "EXEMPLO",
    "STATUS": "EXEMPLO",
    "DATACRIACAO": "00/00/0000",
    "ID_USUARIO": 0
  }
```
> Será retornada a mensagem "Tarefa Exemplo atualizada" caso a operação seja bem sucedida.

### Método DELETE
- Para deletar uma tarefa, forneça a rota ```http://localhost:3030/tarefas/:titulo```, utilizando o **título** da tarefa como parâmetro. Será retornada a mensagem "Tarefa deletada"
 
- Para deletar um usuário, forneça a rota ```http://localhost:3030/usuarios/:email```, utilizando o **email** do usuario como parâmetro. Será retornada a mensagem "Usuário deletado"

### INSOMNIA
- Foi utilizado o Insomnia para a testagem e deploy da aplicação. Lá estão todas as rotas com os respectivos verbos HTTP utilizados. Utilize o arquivo ```insomnia.json```.

