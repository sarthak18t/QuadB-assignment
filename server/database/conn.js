const mongoose = require('mongoose')
const {fetchData} = require('../api_data/data')
const model = require('../model/model')
const connect = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then(()=>{
            console.log("Database connected")
        })
        
        await model.deleteMany({})

        await fetchData()
    } catch (error) {
        console.log("Error in fetching " ,error)
    }

} 

module.exports = connect