const express = require('express')

const app = express()

app.use(express.json())
require('dotenv').config()

const {SERVER_PORT} = process.env




app.listen(SERVER_PORT, () => console.log(`app up on ${SERVER_PORT}`))