## What Is the Difference Between var, let and const in JavaScript?
- var: function-scoped, can be re-declared and updated
- let: block-scoped, can be updated but not re-declared
- const: block-scoped, can't be re-declared or updated

## What Is the Temporal Dead Zone?
- Temporal Dead Zone (TDZ) is the time between the variable creation and initialization where you can't access the variable.

## What Is Hoisting?
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

## What Is the Scope Chain?
- The scope chain is used to resolve the value of variables within a function. It consists of the current scope and any parent scopes.
- Example:
```js
var x = 1;

function outer() {
  var y = 2;

  function inner() {
    var z = 3;
    console.log(x + y + z); // 6
  }

  inner();
}

outer();
```

## What Is Lexical Scope?
- Lexical scope is a convention used to define how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has finished executing.

## What Is the this Keyword?
- this is a reference to the object that owns the current code. In the global context, this refers to the global object.

## What Is the Purpose of the super Keyword?
- The super keyword is used to call functions on an object's parent.

## What Is the Prototype Chain?
- The prototype chain is used to implement inheritance in JavaScript. It consists of a series of linked objects, where each object has a reference to its prototype.

## What Is the Difference Between Classical Inheritance and Prototypal Inheritance?
- Classical inheritance involves defining classes and creating instances of those classes, while prototypal inheritance involves creating objects that inherit from other objects.

## What Is a Closure?
- A closure is a function that has access to its own scope, the scope of its parent function, and the global scope.
- Example:
```js
function outer() {
  var x = 1;

  function inner() {
    console.log(x); // 1
  }

  return inner;
}
```

## What Is the Event Loop?
- The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous events.

## What Is the Call Stack?
- The call stack is a data structure used to store function calls in a last-in, first-out order.

## What Is the Event Queue?
- The event queue is a data structure used to store events that are waiting to be processed by the event loop.

## What Is the Difference Between an Arrow Function and a Regular Function?
- Arrow functions do not have their own this value, arguments object, or super keyword, and cannot be used as constructors.

## What Is the Rest Parameter?
- The rest parameter allows you to represent an indefinite number of arguments as an array.
```js
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // 6
```

## What Is the Spread Operator?
- The spread operator allows you to expand an array or object into individual elements.
```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

## What Is Destructuring Assignment?
- Destructuring assignment allows you to extract values from arrays or objects and assign them to variables.
```js
const person = { name: 'John', age: 30 };

const { name, age } = person;
console.log(name, age); // John 30
```
