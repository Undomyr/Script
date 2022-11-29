// Show `Hi ${myName}!`  on button click

const myName = "Gerben"

document.getElementById("btn").addEventListener("click", printName);

const h1Element = document.getElementById("h1");



// Change text to random color from array on button click

const colorArray = ["red", "blue", "yellow", "green", "black"];



function printName() {
    let randomColor = Math.floor(Math.random() * colorArray.length);
    h1Element.innerHTML = `Hi ${myName}!`;
    h1Element.style.color = colorArray[randomColor];
    if (h1Element.style.display === "none") {
        h1Element.style.display = "block";
    } else {
        h1Element.style.display = "none"; 
    }
}
