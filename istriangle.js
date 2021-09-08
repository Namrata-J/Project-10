const inputs = document.querySelectorAll(".input-angle");
const triangleButton = document.querySelector(".btn-triangle");
const outputText = document.querySelector(".output");

function calculateSumOfAngles(angle1, angle2, angle3)
{
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    if(Number(inputs[0].value) > 0 && Number(inputs[1].value) > 0 && Number(inputs[2].value) > 0){
     sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
   // console.log(sumOfAngles);
     if(sumOfAngles == 180){
         outputText.innerText="Yes, it is a triangle."
     }else{
         outputText.innerText="ohhh noah! it does not form a triangle."
     }
    }else{
        outputText.innerText="Invalid input";
    }
}
triangleButton.addEventListener("click", isTriangle);