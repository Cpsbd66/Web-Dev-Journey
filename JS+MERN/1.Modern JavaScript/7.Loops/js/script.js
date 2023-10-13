//while loop
while(false){//constant value in condition or true, false and 0 stops it
    console.log("Hello World!")
}

var i=1;
while(i<=5){
    console.log("Value of i",i)
    i++;
}

//do while
/* try not to use it, as while==do while
do{
    console.log("Value of i",i)
    i++;
}while(i<=5);
*/


// sum and product of 1 to 10

var i = 1;
var sum = 0;
var product = 1;

while (i <= 10) {

    sum = sum + i; // 1 + 2 + 3 + ...
    product = product * i; // 1 * 2 * 3 * ...
    i++; 
}


console.log("Result: " + sum);
console.log("Product: " + product); 

// for loop

for (var j = 1; j<=5 ; j++) {
    console.log(j);
}

for (var k = 5; k >=1; k-- ) {
    console.log(k);
}

// break => leaves 

for(var i=1; i<=5; i++ ) {
    if ( i == 3) {
        break;
    }
    console.log(i);
}



// continue => skips one itteration

for (var i =1; i <= 10; i++){
    if(i % 2 == 1) {
        continue;
    }
    console.log(i);
} 

// String and array

let name = "I am learning Javascript!";
var len;
len = name.length
for(var i=0; i<len; i++){
    console.log(`Index : ${i}`);
    console.log(name[i]); 
}

food = ["Cake", "Chocolate", "Ice Cream"];
len = food.length;

for(var i = 0; i < len; i++) {
    console.log(`Index : ${i}`);
    console.log(food[i]); 
} 

// For-in string/array/object
// For-of string/array
name = "I am learning Javascript!";
food = ["Cake", "Chocolate", "Ice Cream"];

//object doesn't have index
let person = {
    name: "Shakib Al Hasan",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 33,
}

// We will get index
 for( var x in name ) {
    console.log(`index ${x} and item ${ name[x] }` );
} 


// We will get items/values
for(var x of name ) {
    console.log(x);
}

// We will get indexes
for (var y in food) {
    console.log(`Index: ${y}; and item: ${food[y]}`);
}

// We will get items
for (var y of food) {
    console.log(y);
}


// For-in with objects
for (var x in person) {
    console.log(`Property: ${x}
    Value: ${person[x] }`);
}

// For-of won't work for objects 

//sum of square numbers
var n = parseInt(prompt("Enter the number of terms: "));
var sum = 0;
var series = "";

for (var i = 1; i <= n; i++) {
    sum += i ** 2;
    series += (i ** 2).toString();
    if (i == n) { continue; }
    series += " + ";
}

console.log(`${series} = ${sum}`); 
