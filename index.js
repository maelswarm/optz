module.exports = {
  forEach: function(arr, cb) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      cb(arr[i]);
    }
  },
  reduce: function(arr, cb) {
    let accumulator = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      accumulator = cb(accumulator, arr[i]);
    }
    return accumulator;
  },
  map: function(arr, cb) {
    let len = arr.length;
    let newArr = [];
    newArr.length = len;
    for (let i = 0; i < len; i++) {
      newArr[i] = cb(arr[i]);
    }
    return newArr;
  },
  filter: function(arr, cb) {
    let len = arr.length;
    let newArr = [];
    for (let i = 0; i < len; i++) {
      if (cb(arr[i]) === true) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
};
