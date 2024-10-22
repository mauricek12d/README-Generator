// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from "./generateMarkdown.js";

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address for questions:',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Successfully created README!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            const markdown = generateMarkdown(responses);
            const fileName = `${responses.title.replace(/\s+/g, '_')}_README.md`;
            writeToFile(fileName, markdown);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Function call to initialize app
init();
