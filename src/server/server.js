const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
require('dotenv').config()

const { createAccount, getId, getPokemon } = require('./controller.js')

app.use(express.static(path.resolve(__dirname, '../../build')))

app.post('/signup', createAccount)

app.get('/user-id/:email', getId)

app.get('/user-pokemon/:id', getPokemon)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'))
})

const {PORT} = process.env
app.listen(PORT, () => console.log(`app up on ${PORT}`))