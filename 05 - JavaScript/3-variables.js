// var, let, const

let name = "Mario Bianchi";
console.log(name);
name = "Fabio";
console.log(name);

var greeting;
console.log(greeting);
greeting = "Hello";
console.log(greeting);

// Declare Variables
// letters, numbers, _, $

var ciaoBenvenuti = "John"; //Camel Case
var CiaoBenvenuti = "Sarah"; //Pascal Case
var ciao_benvenuti = "John"; //Underscore Case

console.log(ciaoBenvenuti);
console.log(CiaoBenvenuti);

// Objects
const person = {
  name: "Sarah",
  age: 30,
  phoneNumber: "07984425836",
};

console.log(person);

person.name = "John";
console.log(person);

// Array

const number = ["Sarah", 2, true, 4, 5];
number.push("Ciao");

console.log(number);
