//3. comparative opretors in javascript
var num1 = 12;
var num2 = 23;

console.log("comparision of num1 > num2: " + (num1 > num2)); //false

console.log("comparision of num1 < num2: " + (num1 < num2)); //true

console.log("comparision of num1 >= num2: " + (num1 >= num2)); //false

console.log("comparision of num1 <= num2: " + (num1 <= num2)); //true

console.log("comparision of num1 == num2: " + (num1 == num2)); //false

console.log("comparision of num1 != num2: " + (num1 != num2)); //true
var notequalsto = document.getElementById("not_equals_to");
notequalsto.innerHTML = "comparision of num1 != num2: " + (num1 != num2);

console.log("comparision of num1 === num2: " + (num1 === num2)); //false

console.log("comparision of num1 !== num2: " + (num1 !== num2)); //true
var notdoubleequalsto = document.getElementById("not_double_equals_to");
notdoubleequalsto.innerHTML = "comparision of num1 !== num2: " + (num1 !== num2);

var title = document.getElementById("title");
title.innerHTML = "Comparative Operators in javascript";

var numone = document.getElementById("num_one");
numone.innerHTML = "number one: " + num1;

var numtwo = document.getElementById("num_two");
numtwo.innerHTML = "nnumber two: " + num2;

var greatherthen = document.getElementById("greather_then");
greatherthen.innerHTML = "comparision of num1 > num2: " + (num1 > num2);

var lessthen = document.getElementById("less_then");
lessthen.innerHTML = "comparision of num1 < num2: " + (num1 < num2);

var greatherthenequalsto = document.getElementById("greather_then_equals_to");
greatherthenequalsto.innerHTML = "comparision of num1 >= num2: " + (num1 >= num2);

var lessthenequalsto = document.getElementById("less_then_equals_to");
lessthenequalsto.innerHTML = "comparision of num1 <= num2: " + (num1 <= num2);

var doubleequalsto = document.getElementById("double_equals_to");
doubleequalsto.innerHTML = "comparision of num1 == num2: " + (num1 == num2);


// Logical Operators on javascript
var username = "david";
var password = "david123";

console.log("Logical AND: " +(username === "david" && password === "david123")); // true

console.log("Logical AND: " +(username === "david" && password === "david")); // false

console.log("Logical OR: " +(username === "admin" || password === "david123")); // fslse
console.log("Logical OR: " +(username === "david" || password === "admin123")); // true

console.log("Logical not: " + !(username === "admin" && password === "admin123")); // true
console.log("Logical NOT: " + !(username === "admin" || password === "david123")); // true
console.log("Logical NOT: " + !username === "admin" && password === "david123"); // true

var lo_title = document.getElementById("lo_title");
lo_title.innerHTML = "Comparative Operators in javascript";

var usernameinput = document.getElementById("uname");
var passwordinput = document.getElementById("pwd");

usernameinput.innerHTML = username;
passwordinput.innerHTML = password;

var andresult = document.getElementById("and_result");
andresult.innerHTML = "Logical AND: " +(username === "david" && password === "david123");

var orresult = document.getElementById("or_result");
orresult.innerHTML = "Logical OR: " +(username === "admin" || password === "david123");

var notresult = document.getElementById("not_result");
notresult.innerHTML = "Logical not: " + !(username === "admin" && password === "admin123");

// 5. Bitwise operators in javascript
console.log("Bitwise AND: " + (10 & 5)); // 0
console.log("Bitwise OR: " + (10 | 5)); // 15
console.log("Bitwise XOR: " + (10 ^ 5)); // 15
console.log("Bitwise NOT: " + (~10)); // -11
console.log("Bitwise Left Shift: " + (10 << 1)); // 20
console.log("Bitwise Right Shift: " + (10 >> 1)); // 5


// 6. Temporay Operator in javaScript
var age = 25;
var result = (age >= 18) ? "Adult" : "Minor";
console.log("Temprary Operator Result: " + result);