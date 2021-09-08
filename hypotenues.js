const sideInput = document.querySelectorAll(".side-input");
const buttonSideC = document.querySelector(".hypotenuse-button");
const outputSideC = document.querySelector(".hypotenuse-output");

function calculateLength(a, b){
    const totalLength = a*a + b*b;
    return totalLength;
   // console.log(totalLength);
}

function calculateHypotenuse(){
    if(Number(sideInput[0].value > 0 && Number(sideInput[1].value) > 0)){
     totalLength = calculateLength(Number(sideInput[0].value), Number(sideInput[1].value));

    const lengthOfSideC = Math.sqrt(totalLength);
    outputSideC.innerText = "The length of hypotenuse side c is:" + lengthOfSideC + "cm";
   // console.log(lengthOfSideC);
    }else{
        outputSideC.innerText="Invalid input";
    }
}

buttonSideC.addEventListener("click", calculateHypotenuse);