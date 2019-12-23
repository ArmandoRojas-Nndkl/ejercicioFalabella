const obtenerData = require('../../scr/obtenerData');
const axios = require('axios')

jest.mock('axios')

describe('obtenerData',() => {
    const resp ={
        data:{
            
            next : null,
        
            results:[

                {"name": "Calamari Cruiser"},
                {"name": "A-wing"},
                {"name": "B-wing"},
                {"name": "Republic Cruiser"},
                
            ]
        }
    }
    axios.get.mockResolvedValue(resp)

    it('shoud recive the array',async done =>{
        const res = await obtenerData();
        
    expect(Array.isArray(res)).toBeTruthy();
    expect(res).toHaveLength(4);
    expect(axios.get).toHaveBeenCalledTimes(1)
    done()
    })
})
