// operations
//binary operation => operand operator operand

//arithmantic operator => +, -, *, /, %(remainder), **(exponential) => uses BODMAS rull

//increment => ++ same as += 1 => ++a or a++ , same but has some exceptions
//decrement => -- same as -= 1 => --a or a-- , same logic as ++ 

var a = 7
var b = 5

var c,d;
c = a++; //c is setted to 7 first, then a is incremented
d = ++b; // first increment then setted


console.log(c,d)

//string operators

var line1 = "Hello"
var line2 = "World!"

console.log(line1+line2) //no space
console.log(line1,line2)//1 auto space

console.log(36+line1) //will count 36 as string

console.log("hello" + 34 + 3) //hello343
console.log(34+3+"hello") //37hello 

console.log("76"-"3") //73 
console.log("76"+"3") // 763, wtf~

//comparision (==, !=, >, <, >=, <=) => true or false
// !== and === compares both value and types

// logical operators ||(or), &&(and), !(return the inverse)

//conditional

x = (1<7)?"Hello":"World"; //if true then 1st one, oterwise 2nd one
console.log(x)