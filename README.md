# IndraJS

**IndraJS** is a programming language designed for Hindi-speaking developers who wish to write code in their native language. IndraJS provides a simple and intuitive interface for programming in Hindi, making it accessible and easy to learn for those who are more comfortable with the Hindi language.

## Features

- **Hindi Syntax**: Write code using Hindi keywords and function names.
- **Simple Interface**: Easy-to-use classes and methods that are tailored for basic programming tasks.
- **Interactive Console**: IndraJS provides an interactive way to receive input from users and display output in the console.
- **Flexible Variable Storage**: Store and retrieve variables with ease using the `rakho` method.

## Installation

To use IndraJS, you need to have Node.js installed on your system. You can install IndraJS using npm:

```bash
npm install indrajs
```

## Usage

Here is a simple example of how to use IndraJS:

```js
import Hindi from 'indrajs';

const _ = new Hindi();

// Display a message
_.dikhao('Hello, India');

// Ask for user input
const name = _.batao('Aapka naam kya hai ? ');
_.dikhao('Aapka naam hai :', name);

// Store a value in a variable
_.rakho('age', 25);

// Access the stored variable
_.dikhao('apki age hai :', _.age);

```

## Methods

1. dikhao(...args): Display the provided arguments in the console.

```js
_.dikhao('Hello, India');
```

2. batao(...args): Prompt the user for input. Returns an array of responses.

```js
const [name, age] = _.batao('Aapka naam kya hai? ', 'Aapki age kya hai? ');
```

3. rakho(variable, value): Store a value in the specified variable.

```js
_.rakho('desh', 'Bhaarat');
_.dikhao('Humara desh hai:', _.desh);
```

## Why IndraJS?

IndraJS is developed to bridge the gap between programming and native language speakers. By allowing programmers to write code in Hindi, it not only makes programming more accessible but also empowers developers to think and code in their first language.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve IndraJS.

## License

IndraJS is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any inquiries or suggestions, feel free to contact the developer.

- Email : naveduddin83@gmail.com
- Linkedin : [naved-uddin-800241195](https://www.linkedin.com/in/naved-uddin-800241195/)
- Instagram : [_n_a_v_e_d_99](https://www.instagram.com/_n_a_v_e_d_99/)