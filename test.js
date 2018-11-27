const Optz = require('./index.js');

let myArray = [];
for (let i = 0; i < 1000000; i++) {
  myArray[i] = i;
}

console.time('Optz Reduce');
let result = Optz.reduce(myArray, (accum, val) => (accum += val));
console.timeEnd('Optz Reduce');

console.time('Optz ReduceRight');
result = Optz.reduceRight(myArray, (accum, val) => (accum += val));
console.timeEnd('Optz ReduceRight');

console.time('Optz Map');
result = Optz.map(myArray, x => x + 3);
console.timeEnd('Optz Map');

console.time('Optz Filter');
result = Optz.filter(myArray, x => x > 3);
console.timeEnd('Optz Filter');

console.time('Optz ForEach');
Optz.forEach(myArray, x => {});
console.timeEnd('Optz ForEach');

console.time('Reduce');
result = myArray.reduce((accum, val) => (accum += val));
console.timeEnd('Reduce');

console.time('ReduceRight');
result = myArray.reduceRight((accum, val) => (accum += val));
console.timeEnd('ReduceRight');

console.time('Map');
result = myArray.map(x => x + 3);
console.timeEnd('Map');

console.time('Filter');
result = myArray.filter(x => x > 3);
console.timeEnd('Filter');

console.time('ForEach');
myArray.forEach(x => {});
console.timeEnd('ForEach');
