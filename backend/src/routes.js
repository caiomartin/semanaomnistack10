const { Router } = require('express')

const routes = Router()


// METODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARAMETROS
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Routes Params: request.params (Indentificar um recurso na alteração  ou remoção)
// Body: request.boddy (Dados para criação  ou alteração de um registro)


routes.post('/users', (request, response) => {
    console.log(request.body)
    return response.json({ menssage: 'Hello World!' })
    
})

module.exports = routes