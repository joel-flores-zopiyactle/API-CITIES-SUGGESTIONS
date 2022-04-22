require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app  = express()

//Middlewares
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3001;

//Rutas
app.use('/api/v1/cities', require('./router/cities'));

const server = app.listen(PORT, () => {
    console.log('Server started on port' + PORT)
})

module.exports = {app, server}


