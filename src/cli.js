import readlineSyns from 'readline-sync';

export const giveName = () => {
    const userName = readlineSyns.question('May I have your name? ')
        return userName
}
