const {expect} = require('chai');
const {reverseString} = require('../problems/reverse-string')


describe ("reverseString", function (){
    it ("should reverse string", function (){
        let res = reverseString("fun");
        expect(res).to.equal("nuf");
    })
})
