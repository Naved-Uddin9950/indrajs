import readlineSync from 'readline-sync';

const ask = readlineSync;

class Hindi {
    constructor() { }

    dikhao(...args) {
        console.log(...args);
    }

    batao(...args) {
        return ask.question(...args);
    }
}

export default Hindi;