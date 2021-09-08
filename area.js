const inputField = document.querySelectorAll(".length-cm");
const buttonArea = document.querySelector(".area-button");
const outputArea = document.querySelector(".area-output");

function baseHeightCalculation(b, h){
     const Result = (b * h)/2;
     return Result;
}

function calculateArea(){
     Result = baseHeightCalculation(Number(inputField[0].value), Number(inputField[1].value));
     outputArea.innerText = "Area is: " + Result + "cm²";
}

buttonArea.addEventListener("click", calculateArea);