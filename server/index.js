require('dotenv').config()
const express =require('express');
const massive = require('massive')
const app = express();
const controller = require('./controller'
)

const port = 4000;

app.listen(port, function() {
    console.log(`Port ${port} communication is on point!`)
})

