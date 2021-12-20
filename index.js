

let buttonColor = "blue";
let count = 0;

function pressButton(){

    if(buttonColor==="blue")
    buttonColor = "green";
    
    else{
        buttonColor = "blue"
    }
    document.getElementById("button").textContent = buttonColor;
    document.getElementById("hello").innerText = buttonColor;

    console.log(buttonColor);
}
function increment(){
    count = count+1;
    document.getElementById("people").textContent = count;
}
function decrement(){
    if(count>0)
    count = count-1;
    document.getElementById("people").textContent = count;
}
function reset(){
    count = 0;
    document.getElementById("people").textContent = count;
}

console.log(24)
//alert( "check for tips");  