# optz

Make things quicker

## Usage / Examples

```js
npm install optz
```

```js
const Optz = require('optz');

let myArray = [];
for (let i = 0; i < 1000000; i++) {
  myArray[i] = i;
}

let result = Optz.reduce(myArray, (accum, val) => (accum += val));
...
result = Optz.reduceRight(myArray, (accum, val) => (accum += val));
...
result = Optz.map(myArray, x => x + 3);
...
result = Optz.filter(myArray, x => x > 3);
...
Optz.forEach(myArray, x => {});
...
```

## Performance
