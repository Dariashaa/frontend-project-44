#!/usr/bin/env node

import readlineSyns from 'readline-sync';
import {giveName} from "../src/cli.js"

const brainEven = () => {
    let countWin = 0;

    console.log("Welcome to the Brain Games!")
    const userName = giveName()
    console.log(`Hello, ${userName}`)

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    while (countWin !== 3){
        let randomNumber = Math.floor((Math.random()) * 100)
        let correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
        console.log('Question: ' + randomNumber )

        let answer = readlineSyns.question("Your answer: ")
        if (answer === correctAnswer){
            console.log('Correct!')
            countWin += 1
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
            console.log(`Let's try again, ${userName}`)
            break
        }
    }
    if (countWin === 3){
        console.log(`Congratulations, ${userName}`)
        }
}

brainEven()