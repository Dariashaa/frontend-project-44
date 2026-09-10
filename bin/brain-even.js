#!/usr/bin/env node
import {runGame} from '../src/index.js'

let description = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
    let randomNumber = Math.floor((Math.random()) * 100)
    let correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    let question = 'Question: ' + randomNumber 

    return [question, String(correctAnswer)]
}

const brainEven = () => runGame(description, generateRound)

brainEven()