#### Entrega Semana 8 - Resumo e Resolução

## O que entendi?
=============================================================


### Protocolo HTTP e Verbos;


 - A forma mais comum de **URL** é o *Uniform Resource Locator (URL)* 
 <br>que é conhecido como **endereço de Web.**
 
 - URLs podem ser digitado na barra de endereços do seu navegador dizendo para carregar a página associada (recurso).

### HTTP

Compactando, se refere a uma estrutura de cliente-servidor para a comunicação ocorrer. É um protocolo que estabelece a maneira como os *Clients*  se comunicam com o *Server*. 
<br>
Exemplo, como nosso navegador explica  ao servidor que sites e dados gostaria de acessar, envia uma mensagem (*request*) e recebe um retorno (*response*).

 <https://media.prod.mdn.mozit.cloud/attachments/2016/08/09/13687/5d4c4719f4099d5342a5093bdf4a8843/HTTP_Request.png>

 As **Requisições** consistem dos seguintes elementos:

```
  - Um método HTTP, geralmente é um verbo como <i>DELETE, GET, PATCH, POST, PUT,</i> ou um substantivo como OPTIONS ou HEAD que define qual operação o cliente quer fazer. Tipicamente, um cliente quer pegar um recurso (usando GET) ou publicar dados de um formulário HTML (usando POST), embora mais operações podem ser necessárias em outros casos.
  - O caminho do recurso a ser buscado; a URL do recurso sem os elementos que são de contexto, por exemplo sem o protocolo protocol (http://), o domínio domain (aqui como developer.mozilla.org), ou a porta port TCP (aqui indicada pelo 80 que é ocultado por ser o número da porta padrão)
  - A versão do protocolo HTTP.
  - Cabeçalhos opcionais que contém informações adicionais para os servidores.
  - Ou um corpo de dados, para alguns métodos como POST, similares aos corpos das respostas, que contém o recurso requisitado.
  
  ```
 
 
As **Respostas** consistem dos seguintes elementos:

[img!] <https://media.prod.mdn.mozit.cloud/attachments/2016/08/09/13691/58390536967466a1a59ba98d06f43433/HTTP_Response.png>



 ```

A versão do protocolo HTTP que elas seguem.
Um código de status, indicando se a requisição foi bem sucedida, ou não, e por quê.
Uma mensagem de status, uma pequena descrição informal sobre o código de status.
Cabeçalhos HTTP, como aqueles das requisições.
Opcionalmente, um corpo com dados do recurso requisitado.
 
```
 
 CRUD;

É um termo formada pela primeira letra dos verbos, ou protocolo, de comunicação com banco de dadods, que são os métodos que a maioria das aplicações operam

|    CRUD    | Operação | HTTP |
| C - Create | cria um registro | Post | 
| R - Read   | Exibe as informações | Request |
| U - Update | Atualizar ou modificar | patch/put |
| D - Delete | Apaga um registro | Delete |

#### Endpoit
 

 Endpoint é um termo que pode ser traduzido como “pontos de extremidade”. Em protocolos de comunicação, por exemplo, o endpoint faz referência aos terminais de conexão entre uma API e o cliente.

 1- segurança de endpoint

Endpoint security ou segurança de endpoint é uma abordagem referente à proteção de uma rede empresarial, com status de monitoramento, softwares e atividades.

Neste caso, endpoint seria o dispositivo conectado à rede, como um notebook, tablet, smartphone, computador, ou até mesmo outros tipos de aparelhos, como os IoTs.

 2- Endpoint de comunicação

O endpoint de comunicação se refere às conexões de protocolos de comunicação e é, muitas vezes, confundido com API.
É, por exemplo, a URL de acesso a um determinado serviço, que pode ou não ser criado através da API.
Neste conceito, o endpoint se refere às duas pontas entre uma conexão TCP, como o browser (navegador) do usuário em uma ponta, e um web server do servidor, em outra.

###### [Endpoint](https://blog.milvus.com.br/o-que-e-endpoint/#:~:text=A%20plataforma%20Milvus%20%C3%A9%20um,da%20TI%20da%20sua%20empresa.)
 


### API;

**Interface de Programação de Aplicativos**, ou seja, são facilitadores para comunicar-se com um serviço. Podem ser frameworks, podem ser bibliotecas, podem ser até uma linguagem e são criados por diferentes serviços como Google Maps, ou a busca de CEP dos Correios para que seja compartilhada e facilitada o uso de tais ferramentas em códigos de outros pessoas desenvolvedoras.

#### Rest e Restful

REST São convenções e acordos de boas práticas, inslusive para facilitar comunicação, integração e escalonamento com outras interfaces. 

RESTFul é como o selo de reconhecimento de que a API segue as normas REST

### GET && POST; 

#### Método Get

Busca um recurso e quando bem sucedido exibe os dados buscados.

#### Método Post

Permite adicionar um Recurso ao banco de dados.



# Entrega - Semana 8
### criando o próprio server


<br>
==========================================================================================
|--------------- Descrição -------------------| ------------- Rotas Pokemon -------------|
|----------------------------------------------------------------------------------------|
| Quero uma rota que v enha todos os Pokemons |                                          | 
|                                             | > [GET] /pokemon                         |
| Uma Rota /pokemon                           |  > retorna todos os pokemons             |
|                                             | > [GET] /pokemon/{id}                    |
| /pokemon deve retornar todos os Pokemons;   |  > retorna um pokemon pelo id            |
|                                             | > [GET] /pokemon?{tipo}                  |
| Devo conseguir Filtrar por NOMEM, id e tipo;|  > retorna um pokemon pelo tipo          |
|                                             | > [GET] /pokemon/criar                   |
| Devo conseguir cadstrar novos pokemons.     |  > cria novo pokemon                     |
==========================================================================================