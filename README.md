# **{Reprograma}** - #TodasEmTech | Backend | Turma On16 :purple_heart:

## **Semana 08:** Introdução à API: GET + POST 

#


### APRESENTAÇÃO DA AULA DISPONÍVEL [AQUI](https://www.canva.com/design/DAFAa10ou9E/n47IbPs7FzriMdUJZIqNNw/view?utm_content=DAFAa10ou9E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

#

## **Conteúdo da semana** :white_check_mark: 
 - Protocolo HTTP e os verbos ;
 - CRUD ;
 - API/ Web API/ API Rest e Restfull ;
 - Express, Postman e Nodemon ;
 - GET && POST ;
 - Body && Body Parse ;
 - Params ;
 - Fazendo nosso primeiro Server ;
 - Tarefinha para casa!!!



![monophy](https://media.giphy.com/media/ny7UCd6JETnmE/giphy.gif)
#
## **Aprendizados da semana 08** :pencil2: 

#

### **Protocolo HTTP e os verbos** : 
- **Protocolo HTTP :** É a forma em quem o Client e o Server se comunicam;
- **Verbos :** DELETE | GET | PATCH | POST | PUT ; 
- **Status Code :** Resposta do Server para a requisição do Client.


#


### **CRUD :**  
- **Definição :** É a inicial das quatro operações básicas de um banco de dados, e são o que a maioria das aplicações fazem;
- **Operações :** Create | Read | Update | Delete.
#

### **API/ Web API/ API Rest e Restfull :** 
- **API (Interface de Programação de Aplicativos) :** Buscam criar formas e ferramentas de se usar uma funcionalidade/informação sem realmente ter que reiventar certa função. São instruções sobre como se comunicar com um serviço;
- **API Rest && Restfull :** A API Rest é uma forma padronizada de criar APIs baseada no HTTP, ou seja, Rest é um conjunto de princípios de arquitetura. E Restfull é a capacidade de determinado sistema aplicar os princípios de Rest;
- **Organização de uma API Rest :** Coleção de Recursos *(API de bibliotecas, ...)* | Cada recurso possui um identificador *(Id)* | Recursos são representados no formato JSON *(representação de dados em trânsito)*.

#

### **GET && POST ( Listar/ Criar ) :** 
- **GET :** Método que usamos para ler ou recuperar um recurso. Um *GET* que deu certo retornará as informações solicitadas. 


  **[EXEMPLO] :** Usar um GET para recuperar dados específicos de uma categoria específica.
```
GET/categoria/:idcategoria/dados
```


- **POST :** Método que utilizamos para criar um novo recurso, a solicitação POST exige um corpo *(body)* no qual você definirá os dados da entidade a ser criada.
  
  **[EXEMPLO] :** Usar um POST para conseguirmos adicionar um cadastro novo à um banco de dados qualquer.
```
POST/dados
{   "id":idDoNovoCadastro,
    "nome": "NomeNovoCadastro",
    "informacoes": "informacoesNovoCadastro
}
```

#

### **Body && Body Parse :** 
- **Body :** É necessário o uso nos métodos *POST*, *PATCH* e *PUT*. Pois eles enviam dados novos a serem cadastrados em determinado banco de dados.
  
  **[EXEMPLO] :** request.body
```
{
  "nome": "Beatriz",
  "profissão": "Artista",
  "apelido" : "Bibi"
}
```

- **Body Parse :** Faz o papel de converter os dados de uma requisição, transformando os dados do body - muitas vezes difícil de acessar e manipular - em um JSON manipulável.

#

### **Params :** 
- **Definição :** São paramêtros enviados na requisição e podem ser acessados pelo servidor, para definir a requisição e as ações.
  
  **[EXEMPLOS] :** Body | Query | Path
```
// [QUERY]: Usado para buscar/filtrar dados específicos, enviado diretamente na rota.

request.query -> GET/filmes/findByYear?year=1990

// [PATH]: Usados para apontar para um recurso específico dentro de alguma coleção, como o ID.

request.params -> GET/pokemons/{id}

// [BODY]: Usado para envio de dados que serão ainda cadastrados no banco, podendo ser combinado com query e/ou path params.

request.body -> POST/pokemon/criar
```


#

### **Fazendo nosso primeiro Server ( Passo-a-Passo ) :** 
1. **Forkar** repositório "On16-TodasEmTech-S8-Get-Post" ;
2. **Clonar** o fork e abrir no Vscode ;
3. **[npm init]** - Permite iniciar um pacote ;
4. **[npm i express]** + **[npm i nodemon]** - Instala o framework Express e a biblioteca Nodemon ;
5. **[npm start]** - Inicia nosso gerenciador de pacotes ;
6. No arquivo JS principal, **inicializar o Express**, e **conectar** ao banco JSON;
7. No arquivo principal JS, fazer rotas com **GET** e **POST** para **listar/filtrar** e **adicionar/criar** novos cadastros;
8. No **Postman** (ambiente para execução de testes de APIs e requisições) -> Create new -> HTTP Request -> Manda localhost (GET localhost:8080/) -> **SEND**;
9. Esperar um **200 OK**

![monophy](https://http.cat/200.jpg)

#

## **Tarefinha para Casa** :house:

#

- Fazer um fork do [repositório](https://github.com/reprograma/On16-TodasEmTech-S8-API-Get-Post), fazer uma das 4 propostas de tarefa fazendo rotas *[GET/POST]* , alterar o readme (fazendo um resumo da semana 08) , subir a solução para o gitHub e abrir um [Pull Request](https://github.com/grupy-sp/encontros/wiki/Como-sincronizar-o-seu-Fork-com-o-repo-principal) com a solução; 
- O Código está na pasta tarefa-de-casa/src, no arquivo server.js


#


## **E deu tudo certo!!! Prontas para a próxima semana!!!**

![monophy](https://media.giphy.com/media/idFxmiV2dayJEqzXaW/giphy.gif)



#

 

