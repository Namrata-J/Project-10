const inputField = document.querySelectorAll(".length-cm");
const buttonArea = document.querySelector(".area-button");
const outputArea = document.querySelector(".area-output");

function baseHeightCalculation(b, h){
     const Result = (b * h)/2;
     return Result;
}

function calculateArea(){
     if(Number(inputField[0].value > 0) && Number(inputField[1].value > 0)){
     Result = baseHeightCalculation(Number(inputField[0].value), Number(inputField[1].value));
     outputArea.innerText = "Area is: " + Result + "cm²";
}else{
     outputArea.innerText="Invalid input";
}
}

buttonArea.addEventListener("click", calculateArea);