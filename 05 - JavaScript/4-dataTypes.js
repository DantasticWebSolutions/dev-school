// PRIMITIVE

// String
const name = "Mario Bianchi";
// Number
const age = 12;
// Boolean - true/false
const isAvailable = true;
// Null
const car = null;
// Undefined
let test;
test = undefined;

// REFERENCE
// Array
const hobbies = ["tennis", "football"];
// Object
const via = "Via Milano 68, 25128 Brescia BS";
const address = {
  via: "Via Milano",
  civico: 58,
  codicePostale: "25128",
  provincia: "Brescia",
  comune: "Brescia",
  isPrime: true,
};

console.log(`Il numero del civico è: ${address.civico}`);
// Date
const today = new Date();
console.log(today);
