function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw TypeError('this number is not between 1 and 1000000')
  }
  let numString = n.toString();
  let newNum = '';
  for (let i = numString.length - 1; i >= 0; i--) {
    let num = numString[i];
    newNum += num;
  }
  return Number(newNum);
}

// console.log(reciprocal(20000000))

module.exports = {
  returnsThree,
  reciprocal
};
