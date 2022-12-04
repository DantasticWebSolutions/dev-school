let val;

// Number to String
val = String(555);
val = String(4 + 4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1, 2, 3, 4, 5]);

// toString()
val = (5).toString();
val = true.toString();

// String to Number
val = Number("5");
val = Number(false);
val = Number(null);
val = Number("hello");
val = Number([1, 2, 4, 5]);

val = parseInt(100.8);
val = Math.round(100.8);

const val1 = String(5);
const val2 = 6;
const val3 = 9;

const sum = val1 + val2 + val3;
console.log(sum);

// console.log(val);
// console.log(typeof val);
