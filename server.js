const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMD');

const input = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Are there any special installation instructions for you project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project?',
        choices: ['MIT', 'SIL', 'IBM', 'none']
    },
    {
        type: 'input',
        name: 'user',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }

];

function writeFile(fileName, data) { }

function init() {
    inquirer.prompt(input)
        .then((answers) => {
            const readMeContent = generateMD(answers);

            fs.writeFile('README.md', readMeContent);

        });
};


init();
