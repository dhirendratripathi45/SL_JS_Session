// operators in javascript
var title = "Day Two - Operators in javaScript";

// 1. Arithmatic Operators in javaScript
var price = 1500.45;
var discount = 250.50;
var vat = 150;

var total_with_vat = price + vat;
var total_with_discount = total_with_vat - total_with_discount;


console.log("title");
console.log("Item price: " + price);
console.log("Item discount: " + discount);
console.log("vat amount: " + vat);
console.log("priceincludeing discount: " + total_with_vat);
console.log("price including discount: " + total_with_discount);
console.log("total amount to pay: " + total_with_discount);

// displaying the price and discount in html page
var content_title = document.getElementById("title");
content_title.innerHTML = title;

var content_price = document.getElementById("price");
content_title.innerHTML = price;

var content_discount = document.getElementById("discount");
content_discount.innerHTML = discount;

var content_vat = document.getElementById("vat")
content_vat.innerHTML = vat;

var content_total_with_vat = document.getElementById("total_with_vat");
content_total_with_vat.innerHTML = total_with_vat;

var content_total_with_discount = document.getElementById("total_with_discount");
content_total_with_discount.innerHTML = total_with_discount;

var content_total_with_payable = document.getElementById("total_with_payable");
content_total_with_payable.innerHTML = content_total_with_payable;


// modulas example
var a = 10;
var b = 3;
console.log("Modules of a and b: " + a % b);

// 2. assignment operators
var x = 10;
var y = 20;
console.log("value of x: " + x);
console.log("value of y: " + y);

var value_of_x = document.getElementById("value_of_x");
value_of_x.innerHTML = "value of x: " + x;

var value_of_y = document.getElementById("value_of_y");
value_of_y.innerHTML = "value of y: " + y;
 
x += y; // x = x + y
console.log(" x after addition: " + x);
var content_addition = document.getElementById("addition");
content_addition.innerHTML ="x of addition: " + x;

x -= y; // x = x -y
console.log("x after subtraction: " + x);
var content_subtraction = document.getElementById("subtraction");
content_subtraction.innerHTML = "x of subtraction: " + x;

x *= y; // x = x * y
console.log("x after multiplication: " + x);
var content_multiplication = document.getElementById("multiplication");
content_multiplication.innerHTML = "x of multiplication: " + x;

x /= y; // x = x / y
console.log("x after division: " + x);
var content_division = document.getElementById("division");
content_division.innerHTML ="x after division: " + x;

x %= y; // x = x % y
console.log("modules of x to y: " + x);
var content_modules = document.getElementById("modules");
content_modules.innerHTML = "x after modules:" + x;