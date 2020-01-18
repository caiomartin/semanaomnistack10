const { Router } = require('express')
const axios = require('axios')
const Dev = require('./models/Dev')

const routes = Router()


// METODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARAMETROS
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Routes Params: request.params (Indentificar um recurso na alteração  ou remoção)
// Body: request.boddy (Dados para criação  ou alteração de um registro)


routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login , avatar_url, bio } = apiResponse.data

    const techsArray = techs.split(',').map(techs => techs.trim())

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        techs: techsArray,
    })
     
    return response.json(dev)
    
})

module.exports = routes