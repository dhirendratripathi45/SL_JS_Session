// conditional statements in javascript
// 1. if statement

var username = "admin";
var password = "12344";

//we can also pass value directly to the document
document.getElementById("username").innerHTML = username;
document.getElementById("password").innerHTML = password;

if(username == "admin" && password == "12344");
{
    console.log("Welcome Admin!");
    document.getElementById("userCheck").innerHTML = "Welcome Admin";
}

var numone = 12;
var numtwo = 13;
document.getElementById("numone").innerHTML = numone;
document.getElementById("numtwo").innerHTML = numtwo;

if(numone <= numtwo){
    console.log(numone + " is less than or equal to " + numtwo);
    document.getElementById("numResult").innerHTML = numone + " less then or equal " + numtwo;

}

// 2. if...else..if

var userRole = "admin";

if(userRole === "admin"){
    console.log("you are an admin!");
    document.getElementById("roleCheck").innerHTML = "you are an admin";

} else {
    console.log("you are not admin");
    document.getElementById("roleCheck").innerHTML = "you are not an admin";

}

    // 3. switch statement 
    var day = "Saturday";
    document.getElementById("day").innerHTML = day
    switch (day) {
        case "Monday":
            console.log("Today is Monday");
            document.getElementById("dayCheck").innerHTML = "Today is Monday";
            break;
        
        case "Tuesday":
                console.log("Today is Tuesday");
                document.getElementById("dayCheck").innerHTML = "Today is Tuesday";
                break;

        case "wednesday":
                console.log("today is wednesday");
                document.getElementById("dayCheck").innerHTML = "today is wednesday";
                break;
                
        case "thursday":
                console.log("today is thursday");
                document.getElementById("dayCheck").innerHTML = "today is thursday";
                break;
                
        case "friday":
                console.log("today is friday");
                document.getElementById("dayCheck").innerHTML = "today is friday";
                break;
                
        case "Saturday":
                console.log("today is saturday");
                document.getElementById("dayCheck").innerHTML = "today is saturday";
                break;
                
        case "sunday":
                comsole.log("today is sunday");
                document.getElementById("dayCheck").innerHTML = "today is sunday";
                break;    
    }

    //4. if else if statement
    var age = 18;
    document.getElementById("age").innerHTML = age;

    if (age >= 18){
        console.log("you are an adult");
        document.getElementById("ageCheck").innerHTML = "you are an adult"
    } else if (age >=13){
        console.log("you are a teenager");
        document.getElementById("ageCheck").innerHTML = "you are a teenager";
    } else {
        console.log("you are a child");
        document.getElementById("ageCheck").innerHTML = "you are a child";
    }

    //4. do while loop
    var is_login = "yes"
    do{
        console.log("user logged status: " + is_login);
        break;
    } while (is_login === "yes");

    do{
        console.log("user logged status: " + is_login);
    } while(is_login === "no");