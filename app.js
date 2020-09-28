import { translateToAYes } from './translate-to-a-yes.js';

const quizButton = document.getElementById('quiz-button');
const correctAnswers = document.getElementById('correct-answers');

quizButton.addEventListener('click', () => {
    const nameVar = prompt('What is your name?');

    if (nameVar === null){
        return;
    }

    if (!confirm(`${nameVar}, are you sure you want to start the quiz?`)){
        return;
    }

    let counter = 0;

    const bulbasaurQuestion = prompt('Is it true that Bulbasaur is blue-green in color?');
    
    if (translateToAYes(bulbasaurQuestion)){
        counter++;
    }

    const charmanderQuestion = prompt('Is it true that Charmander is a quadruped?');

    if (!translateToAYes(charmanderQuestion)){
        counter++;
    }

    const squirtleQuestion = prompt('Is it true that Squirtle has a curly tail?');

    if (translateToAYes(squirtleQuestion)){
        counter++;
    }

    alert('Your results will be written to the web page!');
    
    let resultString;
    let resultPercent;

    resultPercent = Math.round((counter / 3) * 100);

    if (counter === 3){
        resultString = `Congratulations, ${nameVar}! You answered ${resultPercent}% of the questions correctly!`;
    } else if (counter === 2){
        resultString = `${nameVar}, you answered ${resultPercent}% of the questions correctly. Only one question wrong!`;
    } else if (counter === 1){
        resultString = `${nameVar}, you only answered ${resultPercent}% of the questions correctly. You might want to brush up a bit!`;
    } else {
        resultString = `Unfortunately ${nameVar}, you answered ${resultPercent}% of the questions correctly. You might want to study a bit more!`;
    }
    
    correctAnswers.textContent = resultString;

});