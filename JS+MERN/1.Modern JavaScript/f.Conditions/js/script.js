if(true){
    console.log("If statement")//true
} else{
    console.log("Else Statement")//falsse
}


var age = 17;
if(age>=50){
    console.log("old")
} else if(age>=18){
    console.log("young")
} else{
    console.log("child")
}

//problem solving with nested loops (largest from 3 int)


var n1=prompt("1st Number: "); var n2=prompt("2nd Number: "); var n3=prompt("3rd Number: ")

n1 = parseInt(n1); n2=parseInt(n2); n3=parseInt(n3)


if(n1 >= n2){
    if(n1>=n3){
        console.log(n1 + " is the largest number")
    }
    else{
        console.log(n3 + " is the largest number")
    }
}
else{
    if(n2>=n3){
        console.log(n1 + " is the largest number")
    }
    else{
    console.log(n3 + " is the largest number")
    }
}


//switch(modern js language)

console.log("Select an option:\na. Option 1 \nb. Option 2 \nc. Option 3 ");

choice = prompt();

var text;

switch (choice) {
    case "a": //if(choice=="a")
        text = "Option 1 Selected!";
        break;
    case "b":
        text = "Option 2 Selected!";
        break;
    case "c":
        text = "Option 3 Selected!";
        break;
    default: // else
        text = "No option is selected!";
        break;
}

console.log(text);