const express = require('express')
const config = require('config')

const PORT = config.get('app.port')

const app = express()

app.get('/author', (req, res) => res.send(`Server Running By ${config.get('author.dev')}`))

app.listen(PORT, () => { console.log(`Server Startd on Port ${PORT}`) })
