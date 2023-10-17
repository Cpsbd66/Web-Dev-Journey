// document.getElementBiId()

let val;

//getting an element
val = document.getElementById("document title");
val = document.getElementById("document title").id;
val = document.getElementById("document title").className;

//changing style
val = document.getElementById("document title").style.backgroundColor="#333" ;
val = document.getElementById("document title").style.color="#FFF" ;
val = document.getElementById("document title").style.padding="10px" ;
val = document.getElementById("document title").style.display="block"; // none to hide


//changing contents
val = document.getElementById("document title").textContent="New title";
val = document.getElementById("document title").innerText="New title";
val = document.getElementById("document title").innerHTML="<i> New title </i>";

val=document.getElementById("ducument title");
//val....

//query selector
val = document.querySelector("#document title") //id
val = document.querySelector(".sample-class") //class
val = document.querySelector("h3") //tag

val = document.querySelector("ol")
val = document.querySelector("ol li") // ol in li

val.style.backgroundColor = "red"
val.style.color="white"

val = document.querySelector("li:last-child")



console.log(val);
