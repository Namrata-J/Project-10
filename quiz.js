const quizForm = document.querySelector(".triangle-quiz");
const submitButton = document.querySelector(".submit-form");
const outputOfQuiz = document.querySelector(".quiz-output");

const correctAnswers = ['90°', 'right angled'];

function calculateScore(){
    let score = 0;
    let index = 0;

    const data = new FormData(quizForm);
    for( var value of data.values()){
        if(value == correctAnswers[index]){
            score=score + 2;
        }
        index = index + 1;
    }
    outputOfQuiz.innerText = "Your score is:" + score + "/4";
}

submitButton.addEventListener("click", calculateScore);