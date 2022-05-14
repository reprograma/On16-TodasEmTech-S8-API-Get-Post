# Iniciando Servidor com Node.js

1. Crie a pasta em que ficará seu servidor

    Dentro da sua pasta crie os arquivos referentes ao servidor, app, rotas, controller e model, como no exemplo:

    ```bash
    \--📂 NOME-DO-SEU-SERVIDOR
    	   |   server.js
    	   |
    		\--📂src
    			    |   app.js
    			    |
    			    📂---controller
    			    |       NOMEController.js
    			    |
    			    📂---model
    			    |       NOME.json
    			    |
    			    📂---routes
    			            NOMERoute.js
    ```

2. Pelo terminal entre em sua pasta referente ao Servidor, como no exemplo:

    ```bash
    ~
    $ cd Desktop/
    ~/Desktop
    $ cd NOME-DO-MEU-SERVIDOR
    ~/Desktop/NOME-DO-MEU-SERVIDOR
    $ ls
    server.js  src/
    ```

3. Inicie o git. (Se você preferir criar um repositório do [git](https://github.com/) e depois clonar, você pode pular essa etapa)

    ```bash
    ~/Desktop/NOME-DO-MEU-SERVIDOR
    $ git init
    Initialized empty Git repository in 
    C:/Users/Mayhhara/Desktop/NOME-DO-MEU-SERVIDOR/.git/
    ~/Desktop/NOME-DO-MEU-SERVIDOR (master)
    $
    ```

4. Inicie o seu projeto com o comando **npm init**

    ```bash
    @DESKTOP MINGW64 ~/Desktop/NOME-DO-MEU-SERVIDOR (master)
    $ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.
    See `npm help init` for definitive documentation on these fields
    and exactly what they do.
    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.
    Press ^C at any time to quit.
    package name: (NOME-DO-MEU-SERVIDOR) Escreva aqui o nome 
    version: (1.0.0)
    description: escreva uma curta descrição 
    entry point: (server.js)
    test command:
    git repository: se não vir automaticamente, coloque o link do repositório
    keywords:
    author: mayhhara morais
    license: (ISC)
    About to write to C:\Users\Mayhhara\Desktop\NOME-DO-MEU-SERVIDOR\package.json:
    {
      "name": "servidor",
      "version": "1.0.0",
      "description": "servidor para aula de backend da reprograma",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "meugit"
      },
      "author": "mayhhara morais",
      "license": "ISC"
    }
    Is this OK? (yes) yes
    ```

5. Repare que será criado um arquivo novo dentro do seu projeto, o package.json:

    ```bash
    ~/Desktop/NOME-DO-MEU-SERVIDOR (master)
    $ ls
    package.json server.js  src/
    ```

    O arquivo package.json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar a versão do node e do npm, url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.

    E dentro do seu projeto o package.json vai estar mais ou menos assim:

    ```jsx
    {
      "name": "servidor",
      "version": "1.0.0",
      "description": "servidor para aula de backend da reprograma",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/reprograma/On16-TodasEmTech-S8-API-Get-Post"
      },
      "author": "mayhhara morais",
      "license": "ISC"
    }
    ```

6. Instale alguns pacotes de dependências importantes para o projeto. 

    O primeiro é o [nodemon](https://www.npmjs.com/package/nodemon), que nos ajuda restartando nosso servidor automaticamente toda vez que fizermos uma modificação no nosso projeto, para instala-la coloque no seu terminal o comando **npm install nodemon** a resposta será a seguinte:

    ```bash
    ~/Desktop/NOME-DO-MEU-SERVIDOR (master)
    $ npm install nodemon
    ```

    Em seguida instale o [express](https://www.npmjs.com/package/express), ele é nos ajuda a criar e gerenciar as chamadas HTTP e montar o servidor com mais facilidade. Para instala-lo você deve colocar no seu terminal o comando **npm install express** a resposta será a seguinte:

    ```bash
    ~/Desktop/NOME-DO-MEU-SERVIDOR (master)
    $ npm install express
    ```

    Perceba que agora no seu package.json tem algumas novas linhas que indicam as dependências usadas e necessárias para o seu projeto:

    ```jsx
    {
      "name": "servidor",
      "version": "1.0.0",
      "description": "servidor para aula de backend da reprograma",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/reprograma/On16-TodasEmTech-S8-API-Get-Post"
      },
      "author": "mayhhara morais",
      "license": "ISC",
      "dependencies": {
    		"express": "^4.17.1",
        "nodemon": "^2.0.4"
      }
    }
    ```

    Perceba também que um novo arquivo foi criado o package-lock.json e uma nova pasta a node_modules:

    ```bash
    ~/Desktop/NOME-DO-MEU-SERVIDOR (master)
    $ ls
    node_modules/  package.json  package-lock.json server.js  src/
    ```

    Sempre que você instalar um pacote do npm, ele será referenciado no package-lock.json e será instalado na pasta node_modules. 

    Na node_modules estarão baixadas as dependências que o seus pacotes precisarão pra funcionar e o package-lock especifica a versão e suas dependências próprias, assim, a instalação criada será sempre a mesma, toda vez.

7. Dentro do projeto, crie o arquivo **.gitignore** e adicione a node_modules. Dentro do .gitignore ficará assim:

    ```jsx
    node_modules/
    ```

    Nós ignoramos a node_modules pois nela estão todos os downloads de todas as dependências do projeto, se apagarmos ela só precisamos dar o comando **npm install** que as dependências serão baixadas de novo e pasta node_modules reaparecerá. 
    O npm sabe quais dependências baixar pois elas estão referenciadas no package.json e no package-lock.json.

8. Agora você terá essa organização de pastas:

    ```bash
    \--📂 NOME-DO-SEU-SERVIDOR
    		 \--📂 node_modules
    		 |   .gitignore
    		 |   package-lock.json
    		 |   package.json
    	   |   server.js
    		 |
    			\--📂src
    			    |   
    			    |
    			    📂---controller
    			    |       NOMEController.js
    			    |
    			    📂---model
    			    |       NOME.json
    			    |
    			    📂---routes
    			            NOMERoute.js
    ```

9.  Procure dentro do seu package.json a chave **"scripts"**, nela são colocados os comando e suas ações. Verifique se existe o comando **"start"**, caso não, adicione o start do server pelo nodemon, dessa forma:

    ```jsx
    {
      "name": "servidor",
      "version": "1.0.0",
      "description": "servidor para aula de backend da reprograma",
      "main": "server.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
    		**"start": "nodemon server.js"**
      },
      "repository": {
        "type": "git",
        "url": "https://github.com/reprograma/On16-TodasEmTech-S8-API-Get-Post"
      },
      "author": "mayhhara morais",
      "license": "ISC",
      "dependencies": {
    		"express": "^4.17.1",
        "nodemon": "^2.0.4"
      }
    }
    ```

10. Agora pode começar a codar seu servidor!
11. Para iniciar o seu servidor, é só rodar o comando **npm start 🚀**

APRESENTAÇÃO DISPONÍVEL [AQUI](https://www.canva.com/design/DAFAa10ou9E/n47IbPs7FzriMdUJZIqNNw/view?utm_content=DAFAa10ou9E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Fontes: 

- [https://medium.com/xp-inc/criando-uma-api-node-em-10-passos-com-express-js-52b2d612a8a9](https://medium.com/xp-inc/criando-uma-api-node-em-10-passos-com-express-js-52b2d612a8a9)
- [https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf](https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf)
- [https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

- [https://github.com/Edilainesds/On14-TodasEmTech-s9-API-DELETE-PUT-PATCH/blob/edilainesilva/material/crud.pdf] (https://github.com/Edilainesds/On14-TodasEmTech-s9-API-DELETE-PUT-PATCH/blob/edilainesilva/material/crud.pdf)

- [https://stackabuse.com/get-http-post-body-in-express-js/](https://stackabuse.com/get-http-post-body-in-express-js)
- [https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters](https://www.digitalocean.com/community/tutorials/use-expressjs-to-get-url-and-post-parameters)
- [https://medium.com/@febatista107/como-converter-os-dados-de-uma-requisi%C3%A7%C3%A3o-com-o-body-parser-2b5b93100f00](https://medium.com/@febatista107/como-converter-os-dados-de-uma-requisi%C3%A7%C3%A3o-com-o-body-parser-2b5b93100f00)
- [https://flaviocopes.com/express-get-query-variables/](https://flaviocopes.com/express-get-query-variables/)
- [https://docs.microsoft.com/pt-br/learn/modules/build-web-api-nodejs-express/4-route-management](https://docs.microsoft.com/pt-br/learn/modules/build-web-api-nodejs-express/4-route-management)
- 
