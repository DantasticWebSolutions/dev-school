const firstName = "William";
const firstNameArray = ["W", "i", "l", "l", "i", "a", "m"];
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Brad";
const tags = "web design,web development,programming";

let val;
// Concatenation
val = firstName + " " + lastName;
// Append
val = "Dan ";
val += "Johnson";
// Escaping
val = "Ciao, il mio nome e' " + firstName + " e ho " + age;
// Length
val = str.length;

// cancat()
val = firstName.concat(" ", lastName, " and my age is ", age);
// New Way
val = `Hello, my name is ${firstName} and my age is ${age}`;
// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Find letter inside var by giving position number
val = firstName[2];
// Find letter inside var by giving a char
val = firstName.indexOf("i");
val = firstName.lastIndexOf("i");

val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 2);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Brad", "Giorgio");

//includes()
val = str.includes("there my name is");

console.log(val);
