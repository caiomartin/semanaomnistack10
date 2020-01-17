const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://caio:gtz21496caio@@cluster0-ls42e.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(express.json)

// METODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARAMETROS
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Routes Params: request.params (Indentificar um recurso na alteração  ou remoção)
// Body: request.boddy (Dados para criação  ou alteração de um registro)

app.get('/', (request, response) => {
    console.log(request.query)
    return response.json({ menssage: 'Hello World!' })
    
})
app.listen(3333);
