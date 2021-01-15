const express = require('express')
const routes = express.Router() //express utiliza o método Router() que faz com que a variável seja responsável pelas rotas
const instructors = require('./instructors')


routes.get('/', function(req, res) { //Página inicial
    return res.redirect("instructors") //Redirecionando para inicial
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index") // renderizando a página inicial
})

routes.get('/instructors/create', function(rec, res) { // Rota de criação
    return res.render("instructors/create")
})

routes.get("/instructors/:id", instructors.show) //recebendo o id dentro do express

routes.post("/instructors", instructors.post) //passando a function de outro arquivo e trazendo para o routes

module.exports = routes //exportando as rotas