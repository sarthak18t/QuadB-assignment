const mongoose = require('mongoose')
const {fetchData} = require('../api_data/data')
const Ticker = require('../model/model')
const connect = async()=>{
    await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('database connected')
    })
    .then(()=>{
        
        fetchData()
    })
    .catch((error)=>{
        console.log(error)
    })
} 

module.exports = connect