const express = require('express');
const body = require('body-parser');
const obtenerData = require('./obtenerData')
const redis = require('redis')
const client = redis.createClient(6379 , '127.0.0.1');
const accionRedis = require('./accionRedis')

const app = express()
const port = 5000

app.use(body.json());

app.post("/ruta-1", async (req,res)=>{
    
    const result = await obtenerData()
    //console.log("result",result)
    await accionRedis.subirRedis(result)        
    res.json(result)

})


app.post("/ruta-2", async (req,res)=>{
    const { filter } = req.body
    //console.log(req.body)   
    res.status(404)      
    res.json(JSON.parse(await accionRedis.found(filter['value'])));      
})

app.listen(port, () => console.log(`example app listening on port ${port}`));

client.on('connect', function() {
    console.log('Redis client connected');
})
