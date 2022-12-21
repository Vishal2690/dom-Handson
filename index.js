
let divElement = document.getElementById("item");
console.log(divElement.innerText);


let headingElement = document.getElementsByTagName("h1");
console.log(headingElement[0].innerText);


let spanElement = document.getElementsByClassName("box");
console.log(spanElement[0].innerText);

let helloElement = document.getElementById("text1");
helloElement.innerText = "Hello World";


let flexButton = document.getElementById("btn");
let flexContainer = document.getElementById("flex-container");
flexButton.addEventListener("click", function () {
    flexContainer.style.flexDirection = "column";
})


let redElement = document.getElementById("heading").style.color="red";


let changeButton = document.getElementById("sm-btn");
changeButton.addEventListener("click", changeWorld);
function changeWorld (){
    document.getElementById("texted").innerText = "Welcome to Elevation Academy";
}



function timer() {
    let times = new Date();

    let hr = times.getHours();
    let min = times.getMinutes();
    let secs = times.getSeconds();
    document.getElementById("clock").innerHTML = `${hr} : ${min} : ${secs}`;
    document.getElementById()
    console.log(he, min, secs);
}
setInterval(timer, 1000)


let printDate = (a) =>{
    document.getElementById("printed-text").innerHTML = document.getElementById("dropdown").value;
}

