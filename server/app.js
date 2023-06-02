const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const {router} = require('./api_data/data')
const db = require('./database/conn')

const app = express();
dotenv.config()
app.use(router)
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello')
})

//express
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
    db()
})