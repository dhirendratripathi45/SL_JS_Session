// Defining function in javascript
var USERNAME = "superadmin";
var PASSWORD = "admin123";

function checkCredentials(param_username, param_password){
    console.log("Checking credentials");
    console.log(USERNAME);
    if(param_username === USERNAME && param_password === PASSWORD){
        console.log("Login successful");
        return true;
    } else {
        return false;
    }

} 

// invoking the function
  checkCredentials("hello", "pass");

function role(userRole){
    if(userRole === "ADMIN"){
        console.log("ADMIN");
    } else if (userRole === "USER"){
      console.log("USER");
       } else{
                console.log("GUEST");
            }
        }
        role("Guest");

        