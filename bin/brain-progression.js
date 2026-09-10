#!/usr/bin/env node
import {runGame} from '../src/index.js'

let description = 'What number is missing in the progression?'

const createProgression= () => {
    let lengthPr = Math.floor((Math.random()) * (10 - 5 + 1) + 5)
    let step = Math.floor((Math.random()) * 10)
    let start = Math.floor((Math.random()) * 100)
    let randomIndex = Math.floor((Math.random() * 10) % lengthPr)
    let progression = [];
    let answer;
    for (let i = 0; i < lengthPr; i++){
        if (i === randomIndex){
            progression.push('..')
            answer = start + i * step

        } else {
            progression.push(start + i * step)
        }
    }

    return [progression.join(' '), answer] 
}

const generateRound = () => {
    let [progression, correctAnswer] = createProgression()
    let question = `Question: ${progression}`

    return [question, String(correctAnswer)]
}

const brainProgression = () => runGame(description, generateRound)

// brainGcd()
brainProgression()