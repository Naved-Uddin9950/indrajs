import readlineSync from 'readline-sync';

const ask = readlineSync;

class Hindi {
    constructor() { }

    dikhao(...args) {
        console.log(...args);
    }

    batao(...args) {
        const ans = [];
        args.map((item) => {
            let tempAns = ask.question(item)
            ans.push(tempAns);
        });
    }
}

export default Hindi;