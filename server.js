const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMD');

const input = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Are there any special installation instructions for you project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
