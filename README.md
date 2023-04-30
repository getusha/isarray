# @getusha/isarray

An ultra-lightweight and simple npm package to check if an object is an array or not. This package returns true if the input object is an array, false otherwise. It's useful for anyone looking to avoid writing a cumbersome, error-prone isArray function in their code.

## Installation

To install the package, simply run:

```bash
npm install @getusha/isarray
```

## Usage
To use the package, require it in your code and pass your object as an argument to the isArray function:

```js
const isArray = require('@getusha/isarray');

console.log(isArray([])); // true
console.log(isArray({})); // false
```

```js
const isArray = require('@getusha/isarray');

console.log(isArray([])); // true
console.log(isArray([1,2])); // true
console.log(isArray(["one", "two"])); // true
console.log(isArray({})); // false
console.log(isArray('')); // false
console.log(isArray(123)); // false
console.log(isArray(true)); // false
console.log(isArray(null)); // false
console.log(isArray(undefined)); // false
```
