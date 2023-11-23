const inquirer = require("inquirer");
const fs = require("fs");
let licenceInfromation='';
inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is your project title',
        },
        {
            name: 'discription',
            type: 'input',
            message: 'Enter discription of your project',
        },
        {
            name: 'instructions',
            type: 'input',
            message: 'Enter instructions for your project',
        },
        {
            name: 'usageInformation',
            type: 'input',
            message: 'Enter Usage Information  of your project',
        },
        {
            name: 'contributionGuidelines',
            type: 'input',
            message: 'Enter Contributions of your project',
        },
        {
            name: 'testInstruction',
            type: 'input',
            message: 'Enter Test instructions of your project',
        },
        {
            type: 'checkbox',
            name: 'licences',
            message:'Choose a license',
            choices:['Academic Free License v3.0',
            new inquirer.Separator(),
            'Apache license 2.0',
            new inquirer.Separator(),
            'MIT',
            new inquirer.Separator(),
            'The Unlicense'],
        },


    ])
    .then((answers) => {
        
       if(answers.licences=="Academic Free License v3.0")
            licenceInfromation="This Academic Free License (the “License”) applies to any original work of authorship (the “Original Work”) whose owner (the “Licensor”) has placed the following licensing notice adjacent to the copyright notice for the Original Work:Licensed under the Academic Free License version 3.0"
        
            else if(licences=="Apache license 2.0")
             licenceInfromation="The Apache 2.0 License is permissive. It allows you to use, modify, and distribute the licensed software, including creating derivative works, without requiring those derivative works to be licensed under the same terms."
        
            else if(licences=="MIT")
             licenceInfromation="The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT) in the late 1980"
            
            else if (licences=="The Unlicense")
             licenceInfromation="A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code. Permissions."

    const readme =
            `## Project:${answers.title}\n## User Story \n ${answers.discription}\n## Acceptance Criteria \nGIVEN a command-line application that accepts user input
            \nWHEN I am prompted for information about my application repository
            \nTHEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
            \nWHEN I enter my project title\n
            \nTHEN this is displayed as the title of the README
            \nWHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
            \nTHEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
            \nWHEN I choose a license for my application from a list of options
            \nTHEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
            \nWHEN I enter my GitHub username
            \nTHEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
            \nWHEN I enter my email address
            \nTHEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
            \nWHEN I click on the links in the Table of Contents
            \nTHEN I am taken to the corresponding section of the README \n##License:${answers.licences} \n
            ${answers.licences} is the ${licenceInfromation}
    `;


        fs.writeFile('README.md', readme, (err) =>
            err ? console.error(err) : console.log('Success!')
        );

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment")
        } else {
            console.log("Something else went wrong")
        }
    });