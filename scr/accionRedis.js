const redis = require('redis')
const util = require('util');
const client = redis.createClient(6379 , '127.0.0.1');
const getAsync = util.promisify(client.get).bind(client);



const subirRedis = (results) => {
    const result = results 
    //console.log("result", result);
    for ( let index = 0 ; index<result.length;index++){
        //console.log("index", index, " result.name", result[index]['name'])
        let nombreNave = result[index]['name']
        const arreglo = JSON.stringify(result[index])
        client.set(nombreNave, arreglo ,redis.print)
    }
    
};

const found = async (filter) => {
    //console.log('filter',filter)
    const founds = await getAsync(filter);
    return founds
}

module.exports={ subirRedis,found}