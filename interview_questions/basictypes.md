## What are the primitive types in Javascript
- Number 
- String
- Boolean
- Undefined 
- Null
- Symbol
- BigInt

## What is the difference between null, undefined and undeclared variables?
- `null` is a value that represents no value. It is a primitive value that represents the absence of a value.
- `undefined` is a type itself that represents the absence of a value.
- `undeclared` is a variable that does not exist in the scope. If you try to access an undeclared variable, it will throw a ReferenceError in strict mode.

## What is the difference between double equals (==) and triple equals (===) in JavaScript?
- `==` is used for comparison between two variables irrespective of the datatype of variable.
- `===` is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values.

## What is the difference between let and var in JavaScript?
- `var` is function scoped when `let` is block scoped.

## What is the difference between function declaration and function expression?
- Function declaration is hoisted in JavaScript, which means you can use the function before declaring it.
- Function expression is not hoisted.

## What is the Difference Between Map and Object in JavaScript, and Why Do We Need Map?
- `Map` is an object that stores key-value pairs. The keys in Map can be of any type, whereas keys in Object are always strings.
- `Map` is iterable and can iterate its elements in the order of their insertion.
- `Map` has a size property, whereas Objects have no size property.
- `Map` is a better choice for storing data in the case when the data is unknown until runtime.

## What is the difference between for...of and for...in statements?
- `for...in` is used to iterate over the enumerable properties of an object.
- `for...of` is used to iterate over the values of an iterable object.

## What Is the Difference Between Set, Map, WeakSet, and WeakMap in JavaScript?
- `Set` is a collection of unique values.
- `Map` is a collection of key-value pairs.
- `WeakSet` is a Set where only objects are allowed.
- `WeakMap` is a Map where only objects are allowed as keys.

## What Will 0.1 + 0.2 Be in JavaScript? Why?
- 0.1 + 0.2 is not equal to 0.3. It is equal to 0.30000000000000004. This is because of floating-point arithmetic.
- The internal representation of the number in JavaScript follows the IEEE 754 standard, which is the binary representation of the number.

## What Is the Purpose of "use strict" in JavaScript and What Are the Benefits of Using It?
- `use strict` is a directive that tells the browser to execute the code in strict mode.
- Strict mode helps you write cleaner code by throwing an error if you use a variable without declaring it.

## What is the difference between synchronous and asynchronous code in JavaScript?
- Synchronous code is executed in sequence, one statement at a time.
- Asynchronous code is executed all at once, and the result is returned later.

## What is the difference between call, apply, and bind in JavaScript?
- `call` and `apply` are used to invoke a function with a specific context.
- `bind` is used to create a new function with a specific context.

## What is the difference between window, screen, and document in JavaScript?
- `window` is the global object in the browser.
- `screen` is an object that contains information about the user's screen.
- `document` is an object that represents the HTML document in the browser.

## What is the difference between innerText and innerHTML in JavaScript?
- `innerText` returns the text content of an element.
- `innerHTML` returns the HTML content of an element.

## What is the difference between event bubbling and event capturing in JavaScript?
- Event bubbling is the default behavior in which the event is first captured by the innermost element and then propagated to the outer elements.
- Event capturing is the opposite behavior in which the event is first captured by the outermost element and then propagated to the inner elements.

## What is the difference between local storage and session storage in JavaScript?
- `localStorage` stores data with no expiration date.
- `sessionStorage` stores data for one session only.

## What is the difference between cookies and local storage in JavaScript?
- Cookies are sent to the server with every HTTP request, which can slow down the website.
- Local storage is stored on the client-side and is not sent to the server with every HTTP request.

## What is the difference between the DOM and the Virtual DOM in JavaScript?
- The DOM is the actual representation of the HTML document in the browser.
- The Virtual DOM is a lightweight copy of the DOM that is used to optimize rendering performance.

## What is the difference between the window.onload event and the DOMContentLoaded event in JavaScript?
- `window.onload` waits for all the resources to load before executing the code.
- `DOMContentLoaded` waits for the HTML content to load before executing the code.

## What is the difference between the addEventListener method and the onclick event in JavaScript?
- `addEventListener` allows you to attach multiple event handlers to an element.
- `onclick` allows you to attach only one event handler to an element.

## What are some of the inbuilt methods in JavaScript objects?
- `Object.keys()`- returns an array of a given object's own property names.
- `Object.values()`- returns an array of a given object's own enumerable property values.
- `Object.entries()`- returns an array of a given object's own enumerable property [key, value] pairs.

## What is the difference between the rest parameter and the spread operator in JavaScript?
- The rest parameter is used to represent an indefinite number of arguments as an array. `function sum(...args) { }`
- The spread operator is used to split an array into individual elements. `const arr = [1, 2, 3]; console.log(...arr);`

## What is the difference between the push and unshift methods in JavaScript?
- `push` adds elements to the end of an array. `arr.push(4);`
- `unshift` adds elements to the beginning of an array.`arr.unshift(0);`

## What is the difference between the pop and shift methods in JavaScript?
- `pop` removes the last element from an array. `arr.pop();`
- `shift` removes the first element from an array. `arr.shift();`

## What is the difference between the slice and splice methods in JavaScript?
- `slice` returns a new array with a portion of the original array. `arr.slice(1, 3);`
- `splice` changes the contents of an array by removing or replacing existing elements. `arr.splice(1, 2);`

## What is the difference between the map and filter methods in JavaScript?
- `map` creates a new array with the results of calling a provided function on every element in the array. `arr.map(x => x * 2);`
- `filter` creates a new array with all elements that pass the test implemented by the provided function. `arr.filter(x => x > 2);`

## What is the difference between the reduce and reduceRight methods in JavaScript?
- `reduce` applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. `arr.reduce((acc, x) => acc + x, 0);`
- `reduceRight` applies a function against an accumulator and each element in the array (from right to left) to reduce it to a single value. `arr.reduceRight((acc, x) => acc + x, 0);`

## What is the difference between the find and findIndex methods in JavaScript?
- `find` returns the first element in the array that satisfies the provided testing function. `arr.find(x => x > 2);`
- `findIndex` returns the index of the first element in the array that satisfies the provided testing function. `arr.findIndex(x => x > 2);`

## What is the difference between the some and every methods in JavaScript?
- `some` tests whether at least one element in the array passes the test implemented by the provided function. `arr.some(x => x > 2);`
- `every` tests whether all elements in the array pass the test implemented by the provided function. `arr.every(x => x > 2);`

## What is the difference between the includes and indexOf methods in JavaScript?
- `includes` determines whether an array includes a certain element. `arr.includes(2);`
- `indexOf` returns the first index at which a given element can be found in the array, or -1 if it is not present. `arr.indexOf(2);`

## What is the difference between the flat and flatMap methods in JavaScript?
- `flat` creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. `arr.flat(1);`
- `flatMap` first maps each element using a mapping function, then flattens the result into a new array. `arr.flatMap(x => [x, x * 2]);`

## What is the difference between the from and of methods in JavaScript?
- `from` creates a new array from an array-like or iterable object. `Array.from('hello');`
- `of` creates a new array with the elements passed as arguments. `Array.of(1, 2, 3);`

## What is the difference between the copyWithin and fill methods in JavaScript?
- `copyWithin` copies a sequence of array elements within the array. `arr.copyWithin(0, 1, 3);`
- `fill` fills all the elements of an array from a start index to an end index with a static value. `arr.fill(0, 1, 3);`

## What is the difference between the keys, values, and entries methods in JavaScript?
- `keys` returns an array iterator that contains the keys for each index in the array. `arr.keys();`
- `values` returns an array iterator that contains the values for each index in the array. `arr.values();`
- `entries` returns an array iterator that contains the key-value pairs for each index in the array. `arr.entries();`

## What is the difference between the reverse and sort methods in JavaScript?
- `reverse` reverses the elements of an array in place. `arr.reverse();`
- `sort` sorts the elements of an array in place and returns the sorted array. `arr.sort();`

## What is the difference between the concat and join methods in JavaScript?
- `concat` returns a new array that combines the elements of the original array with other arrays or values. `arr.concat([4, 5]);`
- `join` joins all elements of an array into a string. `arr.join(', ');`

## What is the difference between the toString and toLocaleString methods in JavaScript?
- `toString` returns a string representing the array and its elements. `arr.toString();`
- `toLocaleString` returns a string representing the array and its elements using the locale-specific formatting. `arr.toLocaleString();`

## What is the difference between the Symbol and Object methods in JavaScript?
- `Symbol` is a primitive data type that is used to create unique values. `Symbol('key');`
- `Object` is a constructor function that creates an object wrapper for the given value. `Object({ key: 'value' });`

## What is the difference between the Math and Number methods in JavaScript?
- `Math` is an object that provides mathematical constants and functions. `Math.PI;`
- `Number` is a constructor function that creates a number object. `Number('123');`

##  What are the scopes of a variable in JavaScript?
- Global scope - A variable declared outside a function has a global scope.
- Local scope - A variable declared inside a function has a local scope.

## What is the difference between the var, let, and const keywords in JavaScript?
- `var` is function-scoped.
- `let` is block-scoped.
- `const` is block-scoped and cannot be reassigned.

## What is the ‘this’ keyword in JavaScript?
- `this` refers to the object that is executing the current function.

##  What is Callback in JavaScript?
- A callback is a function that is passed as an argument to another function and is executed after the completion of that function.

