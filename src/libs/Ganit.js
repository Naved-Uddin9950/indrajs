export class Ganit {
    constructor() { }

    jodo(...args) {
        if (args.length === 0) return 0;
        return args.reduce((sum, item) => sum + item, 0);
    }

    ghatao(...args) {
        if (args.length === 0) return 0;
        return args.reduce((sub, item) => sub - item);
    }

    guna(...args) {
        if (args.length === 0) return 0;
        return args.reduce((mult, item) => mult * item);
    }

    bhag(...args) {
        if (args.length === 0) return 0;
        return args.reduce((div, item) => div / item);
    }
}