const assert = require('chai').assert;
const server = require('../server');

describe('testing the server',()=>{
    it('test',()=>{
        let result = 'Weather App';
        assert.equal(result,'Weather App')
    })
})