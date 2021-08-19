const chai = require('chai');
const expect = chai.expect;
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe('returnsThree()', function () {
    it('should return the number 3', function () {
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal()', function () {
    context('if num is between 1 and 1000000', function () {
        it('should return reciprocal of num', function () {
            let num1 = 1;
            let num2 = 154;

            expect(reciprocal(num1)).to.equal(1);
            expect(reciprocal(num2)).to.equal(451);
        })
    })
    context('if num is outside 1 and 1000000', function () {
        it('it should throw a TypeError', function () {

            let num1 = 0;
            let num2 = 1000001;

            expect(() => reciprocal(num1)).to.throw(TypeError);
            expect(() => reciprocal(num2)).to.throw(TypeError);
        })
    })

})
