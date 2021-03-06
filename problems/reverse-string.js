module.exports = function reverseString(string) {
  if (typeof string !== 'string') {
    throw TypeError('')
  }

  let newString = '';
  for (let i = string.length-1; i >= 0; i--) {
    let char = string[i];
    newString += char;
  }
  return newString;
};
