const express = require('express');
const Ticker = require('../model/model')
const router = express.Router();
const axios = require('axios');

const fetchData = async()=>{
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const Data = response.data;

    const dataKeys = Object.keys(Data)
    console.log(dataKeys)
    for (var i=0;i<10 && i<dataKeys.length;i++) {
    
          const key = dataKeys[i];
          const tickerData = Data[key];
          const ticker = new Ticker({
            name: tickerData.name,
            last: tickerData.last,
            buy: tickerData.buy,
            sell: tickerData.sell,
            volume: tickerData.volume,
            base_unit: tickerData.base_unit
          });

          ticker.save()
          .then(()=>{
            console.log('Ticker saved in database with data', ticker)
          })
          .catch((error)=>{
            console.log('ticker doesnt saved',error)
          })
    }
}

router.get('/data',async(req,res)=>{
    await Ticker.find()
    .then((ticker)=>{
        res.status(200).json(ticker)
    })
    .catch((error)=>{
        res.status(400).send(error)
    })
})



module.exports = {router ,fetchData}