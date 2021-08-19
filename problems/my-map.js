function myMap(inputArray, callback) {

  if (!Array.isArray(inputArray)) {
    throw TypeError('input should be an array');
  }
  let res = [];
  inputArray.forEach(function(ele) {
    let newNum = callback(ele);
    res.push(newNum);
  })
  return res;
}

console.log(myMap([1, 2, 3], (el) => el * 2))

module.exports = myMap;
