const prompt = require('prompt-sync')();
const pinCode = '1234';


let user_input =prompt("enter your pincode: ");


//Combine
if (user_input == "1234" ){
    console.log("welcome");
}
else{
    console.log("wrong pin");
}