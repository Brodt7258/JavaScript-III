/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. By default, in a global scope, "this" refers to the Window or Global object.
* 2. When a function is called by an object (object to the left of the dot preceding the function call), "this" refers to that object.
* 3. In the context of a constructor function, "this" refers to the object created by that constructor.
* 4. "call" and "apply" can be used to explictly set "this" to a different object than the context would implcitly suggest
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

console.log('implicit this'.toUpperCase());

// Principle 3

// code example for New Binding

function GameObject(attrs) {
  this.createdAt = attrs.createdAt;
  this.name = attrs.name;
  this.dimensions = attrs.dimensions;
}

const gameObj = new GameObject({
  createdAt: Date.now(),
  name: 'gameObj',
  dimensions: 5
})

// Principle 4

// code example for Explicit Binding

function greet() {
  console.log(`Hello, I'm ${this.name}`);
}

const bob = {
  name: 'Bob'
}

greet.call(bob);