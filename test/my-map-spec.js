const chai = require('chai');
const {expect} = require('chai');
const spies = require('chai-spies');
const myMap = require('../problems/my-map');

describe('myMap()', function() {
    context('if input is not an array', function() {
        it('should throw an Error', function() {
            let arr = 'not array';

            expect(() => myMap(arr)).to.throw(TypeError);
        })
    })

    context('if input is array', function() {
        it('should return new array with each element passed to callback', function() {
            let arr = [1, 2, 3];
            let cb = (el) => el * 2;
            expect(arr).to.equal([1, 2, 3]);
            expect(myMap(arr, cb)).to.eql([2, 4, 6]);
        })
    })

})
