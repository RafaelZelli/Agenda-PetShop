const express = require('express')  // express é necessário para questão de roteamento
const consign = require('consign')  // consign é para agrupar todas os encapsulamentos.
const bodyParser = require('body-parser')  // é uma biblioteca para "parsear", ou seja, traduzir o conteúdo do Body

module.exports = () =>{
    const app = express()

    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    consign()  //chama o consign
        .include('controllers')   //inclui o arquivo dentro de controllers
        .into(app)    //insere em app

    return app
}