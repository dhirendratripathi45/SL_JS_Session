// loop in javascript

// 1. for loop
for (var i = 0; i < 10; i++);{
console.log("value of i: " + i);
}

// 2. while loops
var num= 12;
while (num <= 20){
    console.log("value of num: " + num);
    num++;
}

// 3. integrating if statement with for loop
// continue statement in javascript -skip the current iteration

for (var i = 0; i < 10; i++){
    if(i == 4){
        console.log("Before continue statement");
    }
    console.log("value of i: " + i);
}