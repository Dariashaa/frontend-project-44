#!/usr/bin/env node
import {runGame} from '../src/index.js'

const description = 'What is the result of the expression?'

const generateRound = () => {    
    let randomNumber1 = Math.floor((Math.random()) * 100)
    let randomNumber2 = Math.floor((Math.random()) * 100)
    let randomOperation = ['+', '-', '*'][Math.floor(Math.random()* 100 % 3)];
    let question = `Question: ${randomNumber1} ${randomOperation} ${randomNumber2} `
    let correctAnswer;

    switch (randomOperation){
        case '+':
            correctAnswer = randomNumber1 + randomNumber2;
            break
        case '-':
            correctAnswer = randomNumber1 - randomNumber2;
            break
        case '*':
            correctAnswer = randomNumber1 * randomNumber2;
            break
    }
    return [question, String(correctAnswer)]

}

const brainCalc = () => runGame(description, generateRound)
brainCalc()