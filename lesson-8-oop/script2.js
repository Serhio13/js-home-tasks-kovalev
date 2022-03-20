function isPal(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  return str === str.split('').reverse().join('');
}

console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));