const axios = require('axios');

const obtenerData = async ()=>{    
    //obtencion de data
    let result = []
    let resultado = ""
    for (let index=1 ; resultado !== null; index++){
        const { data } = await axios.get(`https://swapi.co/api/starships/?page=${index}`)
        
        //obtencion de resultados : datos completos como nombre, pilotos.
        const { next, results } = data
        // console.log('results', results)
        // console.log ('next', next)
        resultado = next
        result.push(...results);
    }
    //console.log('result', result)
    return result    
}

 

module.exports=obtenerData