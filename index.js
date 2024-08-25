import Ganit from './src/libs/Ganit.js';
import Hindi from './src/libs/Hindi.js';


const _ = new Hindi();
const $ = new Ganit();

let ans = _.batao('What is your name ? : ');
_.dikhao('Hello, ', ans);