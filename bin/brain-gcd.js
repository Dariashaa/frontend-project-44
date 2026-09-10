#!/usr/bin/env node
import {runGame} from '../src/index.js'

let description = 'Find the greatest common divisor of given numbers.'

const generateRound = () => {
    let randomNumber1 = Math.floor((Math.random()) * 100)
    let randomNumber2 = Math.floor((Math.random()) * 100)
    let question = `Question: ${randomNumber1} ${randomNumber2}`
    while (randomNumber2 !== 0){
        let temp = randomNumber2
        randomNumber2 = randomNumber1 % randomNumber2
        randomNumber1 = temp
    }

    let correctAnswer = randomNumber1

    return [question, String(correctAnswer)]
}

const brainGcd = () => runGame(description, generateRound)

brainGcd()