//packages needed for application

const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./generateMarkdown.js");

// array of questions for inquirer
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter instructions for installation.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license for your project.',
        choices: ['MIT', 'GPLv2', 'Apache 2.0', 'GPLv3', 'BSD 3-clause', 'none'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter any contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter any test instructions for your project.',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];



function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markdownPageContent = generateMarkdown(data);

            fs.writeFile('README.md', markdownPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
            );

        })
}


init();