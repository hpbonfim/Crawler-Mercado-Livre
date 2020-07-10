<h1 align="center">Crawler do Mercado Livre</h1>

<p align="center">
<a href="https://insomnia.rest/run/?label=&uri=https://github.com/hpbonfim/Crawler-Mercado-Livre/collection.json" target="_blank">
<img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
</a>

<p align="center">
<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme">
<img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/hpbonfim/Crawler-Mercado-Livre/dev/jest">
</a>

<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme">
<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/hpbonfim/Crawler-Mercado-Livre/crawler">
</a>

<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme">
<img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/hpbonfim/Crawler-Mercado-Livre/express">
</a>

<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme">
<img alt="size" src="https://img.shields.io/github/repo-size/hpbonfim/Crawler-Mercado-Livre"/>
</a>
</p>

<p align="center">
<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre/commits/master">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/hpbonfim/Crawler-Mercado-Livre">
</a>

<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme">
<img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme" />
</a>

<a href="https://github.com/hpbonfim/Crawler-Mercado-Livre/graphs/commit-activity">
<img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="https://github.com/hpbonfim/Crawler-Mercado-Livre#readme" />
</a>
</p>

</p>

<p align="center">
<a href="http://ec2-18-230-150-87.sa-east-1.compute.amazonaws.com:3000/" target="_blank">
<img src="https://img.shields.io/badge/AWS%20DEPLOY-TEST%20API-success?style=for-the-badge&logo=amazon-aws" alt="AWS Deploy">
</a>



### Endpoints API


- **POST**: `"/"` - **body: { search: string, limit: number }**   
-- Realiza a consulta no site, trazendo o resultado via JSON [Mercado Livre](https://lista.mercadolivre.com.br/${search})

#### Retorno Esperado
```
[
    {
        "id": Number,
        "name": String, // Nome do produto
        "link": String, // Link do produto
        "price": Number, // Preço, se houver (default: 0)
        "store": String, // Nome da loja, se houver (default: null)
        "state": String // Estado, se houver (default: null)
    }
]
```


[Repositório do backend no Dockerhub](https://hub.docker.com/repository/docker/hpbonfim/crawler-mercadolivre)

### Para iniciar o Backend


``` 
$ npm install
$ npm start
```

### Para testar o Backend

``` 
$ npm install
$ npm test
```



|Tecnologias utilizadas  |
|---------|
|[Node v12.16.3](https://nodejs.org/en/)     |
|[npm  6.14.4](https://www.npmjs.com/)    |
|[Cors](https://www.npmjs.com/package/cors)     |
|[Crawler](https://www.npmjs.com/package/crawler)   |
|[Express](https://www.npmjs.com/package/express)   |
|[ANSI codes for console colors](https://gist.github.com/hpbonfim/d54624baaecb0e8fae3da63075c94f7a)|

