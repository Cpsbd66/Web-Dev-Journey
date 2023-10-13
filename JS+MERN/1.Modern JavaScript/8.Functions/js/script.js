// Functions
// Built in Functions
//alert();
//console.log();

// User Defined Functions

// Declaration of function

//Execution of Function
saySomething();
//console.log("--------");




function saySomething() {
    console.log("Hello!");
    console.log("I am learning Javascript!");
    console.log("Bohubrihi");
}


// FUnction parameter/argument

function saySomenthing2(fname = "Fazle", lname = "Rahat") {
    console.log(`Hello ${ fname } ${ lname }!`);
}


let firstname = "Simanta";
let lastname = "Paul";

saySomenthing2(firstname, lastname);


function addNum(a=0, b=0) {
    console.log(a+b);
}

addNum(4,5);
addNum(3.6, 2.3); 
