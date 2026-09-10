#!/usr/bin/env node
import {runGame} from '../src/index.js'

let description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
    if (num <= 1){
        return 'no'
    }

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return 'no'
        }  
    }
    return 'yes'
    
}

const generateRound = () => {
    let randomNumber = Math.floor((Math.random()) * 100)
    let correctAnswer = isPrime(randomNumber);
    let question = 'Question: ' + randomNumber 

    return [question, String(correctAnswer)]
}

const brainPrime = () => runGame(description, generateRound)

brainPrime()