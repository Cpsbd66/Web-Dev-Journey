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

// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

// Function Expression

let saySomething1 = function(name2) {
    console.log('Hello ' + name2);
}

// Arrow Function (ES6)

let saySomething2 = (name3) => {
    console.log("I am " + name3);
}


saySomething("Bohubrihi");
saySomething1("Tapantor");
saySomething2("JavaScript"); 

// Array iteration using forEach

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];
let printEverything = function(item, i, abc){
    console.log(`Index : ${i} and Item ${item}`);
    console.log(abc);
}

// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array
foods.forEach(printEverything);

// Array iteration using Mapping

function addSomething(item) {
    return `${item} is a Food`;
}

let arr_res = foods.map(addSomething);
let arr_square = numbers.map(function(item){
    return item*item;
})

console.log(arr_res);
console.log(arr_square);

// Object Method
let person = {
    firstname: "Fazle",
    lastname: "Rahat",
    dob: "9-10-1995", //number, string, date, array, object

    fullname: function() { //Method
        return `${this.firstname} ${this.lastname}`;
    }

}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split()); 

 // Math Object
 let val;

 val = Math.PI;
 val = Math.E;
 val = Math.round(23.5);
 val = Math.ceil(3.2);
 val = Math.floor(3.9);
 val = Math.sqrt(81);
 val = Math.abs(-56);
 val = Math.pow(2, 8);
 val = Math.min(2,3,1,0,-8);
 val = Math.max(-1,2,4,5);
 val = Math.random();
 
 val = Math.floor(Math.random() * 20 + 1);
 
 
 // Date Object

 let today = new Date();
 
 val = today;
 val = today.toString();
 
 let birthday = new Date('11-2-1995 8:25:00');
 birthday = new Date('November 2 1995');
 birthday = new Date('11/2/1995');
 val = birthday;
 val = today.getMonth(); // Start from 0
 val = today.getDate();
 val = today.getDay();
 val = today.getFullYear();
 val = today.getHours();
 val = today.getMinutes();
 val = today.getSeconds();
 val = today.getMilliseconds();
 val = today.getTime();
 // timestamp -> amount of time past since Jan 1st 1970
 
 birthday.setMonth(0);
 birthday.setDate(12);
 birthday.setFullYear(1996);
 birthday.setHours(3);
 
 console.log(val);
 console.log(birthday);

 // Global Scope
var a = 1;
let b = 2;
const c = 3;


console.log(`Global Scope: `, a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Functions Scope: `, a, b ,c);
}

test();

console.log(`Global Scope: `, a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`If Scope: ` , a, b, c);
}

console.log(`Global Scope: `, a, b, c);


for (let a = 0; a <10; a ++) {
    console.log(`Loop: `, a);
}


console.log(`Global Scope: `, a, b, c);