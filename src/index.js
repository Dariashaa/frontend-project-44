#!/usr/bin/env node

import readlineSyns from 'readline-sync';
import {giveName} from "../src/cli.js";

export const runGame = (description, generateRound) => {
    let countWin = 0;

    console.log("Welcome to the Brain Games!")
    const userName = giveName()
    console.log(`Hello, ${userName}`)
    console.log(description)

    while (countWin !== 3){
        let [question, correctAnswer] = generateRound()
        console.log(question)

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
