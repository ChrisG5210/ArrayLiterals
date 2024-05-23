// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

/* Write an ES2015 Version */

const filterOutOdds = (...nums) => {
   return nums.filter(value => value % 2 === 0)
}

// Write a function called findMin 
// that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...arg) => {
    return Math.min(...arg)
}

// Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => {
    return ({...obj1, ...obj2});
}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (array, ...args) => {
    return [...array, ...args (value => value * 2)]
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let items = (Math.random() * items.length);
    return [...items[0], ...items[+1]];
}

/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => {
    return [...arr1, arr2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyValue = (obj, key, val) => {
    return ({...obj, key: val})
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newKey = {...obj};
    delete newKey[key];
    return newKey;
}

/** Combine two objects and return a new object. */
const combine = (obj1, obj2) => {
    return ({...obj1, ...obj2});
}

/** Return a new object with a modified key and value. */
const update = (obj, key, val) => {
    return ({...obj, key: val})
}

//let newObj = {...obj};
//newObj [key] = val;
//return newObj;