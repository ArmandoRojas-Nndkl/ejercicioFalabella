const redis = require('redis');
const util = require('util');
const client = redis.createClient(6379 ,'127.0.0.1');
const getAsync = util.promisify(client.get).bind(client);


describe('subirRedis',() => {
    it('shoud recive the array',async done =>{

        const redis = new FakeRedis();

        const list = [
            {"name": "Calamari Cruiser"},
            {"name": "A-wing"},
            {"name": "B-wing"},
            {"name": "Republic Cruiser"},            
        ]

        client.set.mockResolvedValue(list)   

        subirRedis(list)
            
        expect(client.set).toHaveBeenCalledTimes(1)
        done()
        })

});      


