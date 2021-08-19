const chai = require("chai");
const expect = chai.expect;
const reverseString = require('../problems/reverse-string')


describe ("reverseString()", function (){
    it ("should reverse string", function (){
        let res = reverseString("fun");
        expect(res).to.equal("nuf");
    })
})
