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