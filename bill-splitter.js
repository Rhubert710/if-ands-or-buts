const prompt = require('prompt-sync')();


let bill_ammount = Number(prompt("How much is the bill? $"));
let group_size = Number(prompt("How many people in your group? "));


console.log("Each person pays $" + Math.round(bill_ammount/group_size));