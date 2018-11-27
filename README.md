# optz

Make things quicker

## Usage / Examples

```js
npm install optz
```

const Optz = require('optz');

```js
let myArray = [];
for (let i = 0; i < 1000000; i++) {
  myArray[i] = i;
}

let result = Optz.reduce(myArray, (accum, val) => (accum += val));
...
result = Optz.map(myArray, x => x + 3);
...
result = Optz.filter(myArray, x => x > 3);
...
Optz.forEach(myArray, x => {});
...
```

## Performance

Optz has significantly faster evaluation when compared to JS native 'map', 'reduce', 'forEach', and 'filter'. Especially when dealing with large arrays.

Sample array length = 1,000,000

Optz Reduce: 3.863ms - ~5.3x faster
Optz Map: 8.244ms - ~18.368x faster
Optz Filter: 25.388ms - ~1.65x faster
Optz ForEach: 1.970ms - ~6.632x faster

Reduce: 20.490ms
Map: 151.426ms
Filter: 41.889ms
ForEach: 13.066ms
